Rails.application.routes.draw do
  root 'pages#index'
  resources :items, only: [:index, :create]

  match '*path', to: 'pages#index', via: :all
end
