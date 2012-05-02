class WelcomeController < ApplicationController
  def index
  end

  def contact
    breadcrumb :contact
  end
end
