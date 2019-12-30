Rails.application.routes.draw do
  resources :projects
  resources :articles
  root 'home#index'
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'form', to: 'form#index'
end
