Rails.application.routes.draw do
  devise_for :users

  resources :users, only: [:create, :update, :destroy]
  post '/user/find', to: 'users#find'

  devise_scope :user do
    get '/logout' => 'devise/sessions#destroy'
  end

  get 'admin/products/add', to: 'root#index'
  get 'admin/categories/edit', to: 'root#index'
  get 'admin/add', to: 'root#index'

  # search products, paginate
  get 'products/search/:query(/:page)', to: 'products#search'
  get 'products/search/:query(/:page)/return', to: 'root#index'

  # search products by category, paginate
  get '/products/category/:category(/:page)', to: 'products#category' 
  get '/products/category/:category(/:page)/return', to: 'root#index' 

  # show product description blank
  get '/products/description/:id', to: 'root#index' 

  resources :categories
  resources :products, only: [:index, :new, :create, :update, :show, :destroy]
  
  root to: 'root#index'

  get '*all', to: 'root#error', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

end
