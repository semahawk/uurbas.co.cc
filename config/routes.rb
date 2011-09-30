Home::Application.routes.draw do
	scope "(:locale)", :locale => /en|pl/ do
		resources :articles
		match '/projects' => 'welcome#contact'
		match '/contact' => 'welcome#contact'
		root :to => 'welcome#index'
	end
end
