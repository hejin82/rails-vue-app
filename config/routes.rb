Rails.application.routes.draw do
  resources :forms
  resources :projects
  resources :articles
  root 'home#index'
  get 'home/index'
  get 'single', to: 'singles#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
