require File.expand_path('../boot', __FILE__)
require 'rails/all'

Bundler.require(:default, Rails.env) if defined?(Bundler)

module Home
	class Application < Rails::Application
		config.encoding = "utf-8"	# Encoding
		config.filter_parameters += [:password]	# Hey, web bandits, beware!
		config.generators do |g|
			g.template_engine :haml		# Converting ERB files to Haml ones, is boring ;)
		end
	end
end
