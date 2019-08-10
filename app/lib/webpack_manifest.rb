class WebpackManifest
  MANIFEST_PATH = 'public/packs/manifest.json'

  include Singleton

  attr_reader :content

  # webpack-dev-serverを使っているときにのみ、actionごとに呼ばれるメソッド
  def fetch_content
    conn = Faraday::Connection.new(url: 'http://proxy:3002') do |builder|
      builder.use Faraday::Adapter::NetHttp
    end

    begin
      res = conn.get '/packs/manifest.json'
      @content = JSON.parse(res.body)
    rescue Faraday::ConnectionFailed
      sleep 2
      retry
    end
  end

  # webpack-dev-serverを使っていないときにのみ、起動時に呼ばれるメソッド
  def load_content
    @content = JSON.parse(File.read(MANIFEST_PATH))
  end
end
