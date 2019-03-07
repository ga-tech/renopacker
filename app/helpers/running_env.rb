module RunningEnv
  def self.remote?
    ENV['RAILS_ENV'] != 'development'
  end
end
