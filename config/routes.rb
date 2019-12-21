Rails.application.routes.draw do
  get 'tag/index'
  get 'vue/index'
  resources :articles
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root :to => 'home#index', :as => 'home'
  match 'login', :to => 'account#login', :as => 'signin', :via => [:get, :post]
  match 'logout', :to => 'account#logout', :as => 'signout', :via => [:get, :post]

  namespace :staff do
    root 'top#index'
    get 'login' => 'sessions#new', as: :login
    resource :session, only: [:create, :destroy]
    resource :account, except: [ :new, :create, :destroy ]
  end

  namespace :admin do
    root 'top#index'
    get 'login' => 'sessions#new', as: :login
    resource :session, only: [:create, :destroy]
    resources :staff_members
  end

  namespace :customer do
    root 'top#index'
  end

end
