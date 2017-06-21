Rails.application.routes.draw do
  get 'home/index'
  root to: "home#index"
	devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   # root to: "home#index"
   
   namespace :api do
   	namespace :v1 do
   		resources :digimons, only: [:index, :create, :destroy, :update]
      resources :evolutions, only: [:index, :create, :destroy, :update]
   	end
   end
end
