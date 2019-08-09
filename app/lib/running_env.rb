module RunningEnv
  def self.using_webpack_dev_server?
    Rails.env.development?
  end
end
