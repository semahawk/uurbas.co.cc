Home::Application.routes.draw do
	scope "(:locale)", :locale => /en|pl/ do
		resources :articles
		root :to => 'articles#index'
	end
end
