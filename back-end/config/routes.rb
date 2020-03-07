Rails.application.routes.draw do
  resources :users
  namespace :api do
    namespace :vi do 
      resources :applications
    end 
  end 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
