module WebpackBundleHelper
  class BundleNotFound < StandardError
  end

  def asset_bundle_path(entry, **options)
    raise BundleNotFound, "Could not find bundle with name #{entry}" unless manifest.key? entry

    asset_path(manifest.fetch(entry), **options)
  end

  def javascript_bundle_tag(entry, **options)
    path = asset_bundle_path("#{entry}.js")
    options = {
      src: path,
      defer: true
    }.merge(options)

    options.delete(:defer) if options[:async]

    javascript_include_tag '', **options
  end

  def stylesheet_bundle_tag(entry, **options)
    path = asset_bundle_path("#{entry}.css")

    options = {
      href: path
    }.merge(options)
    stylesheet_link_tag '', **options
  end

  def image_bundle_tag(entry, **options)
    filepath = 'app/assets/images/' + entry
    raise ArgumentError, "Extname is missing with #{filepath}" if File.extname(entry).blank?

    image_tag asset_bundle_path(filepath), **options
  end

  private

  def manifest
    if RunningEnv.remote?
      @manifest ||= JSON.parse(File.read('public/packs/manifest.json'))
    else
      conn = Faraday::Connection.new(url: 'http://proxy:3002') do |builder|
        builder.use Faraday::Adapter::NetHttp
      end

      res = conn.get '/packs/manifest.json'
      @manifest ||= JSON.parse(res.body)
    end
  end
end
