class ApplicationController < ActionController::Base
	protect_from_forgery
	before_filter :set_locale
	
	def default_url_options(options = {})
		{ :locale => I18n.locale }
	end
	
	def set_locale
		if params[:locale] == nil
			I18n.locale = extract_locale_from_accept_language_header
		else
			I18n.locale = params[:locale]
		end
		logger.debug "* Locale set to '#{I18n.locale}'"
	end
	
	private
	def extract_locale_from_accept_language_header
		request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
	end
end
