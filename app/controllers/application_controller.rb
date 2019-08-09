class ApplicationController < ActionController::Base
  before_action :webpack_manifest_reload if RunningEnv.using_webpack_dev_server?

  private

  # webpack-dev-serverを使っているときは、actionごとにmanifest.jsonを読みに行く
  def webpack_manifest_reload
    WebpackManifest.instance.fetch_content
  end
end
