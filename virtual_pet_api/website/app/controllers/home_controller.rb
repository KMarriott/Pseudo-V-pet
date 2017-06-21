class HomeController < ApplicationController
  def index
  	render component: 'Main'
  end
end
