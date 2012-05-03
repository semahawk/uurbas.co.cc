Home::Application.routes.draw do
  devise_for :users

  resources :articles do
    resources :comments
  end

  match '/projects' => 'welcome#contact'
  match '/contact' => 'welcome#contact'

  root :to => 'welcome#index'
end
