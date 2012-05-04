Home::Application.routes.draw do
  match '/auth/sign_in' => 'authentications#new', :as => "sign_in"
  match '/auth/sign_up' => 'registrations#new', :as => "sign_up"
  match '/auth/:provider/callback' => 'authentications#create'

  resources :authentications
  devise_for :users

  resources :articles do
    resources :comments
  end

  match '/projects' => 'welcome#contact'
  match '/contact' => 'welcome#contact'

  root :to => 'welcome#index'
end
