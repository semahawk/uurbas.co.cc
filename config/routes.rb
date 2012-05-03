Home::Application.routes.draw do
  resources :articles do
    resources :comments
  end

  match '/projects' => 'welcome#contact'
  match '/contact' => 'welcome#contact'

  root :to => 'welcome#index'
end
