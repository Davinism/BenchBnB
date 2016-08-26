Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:index, :create]
  end

  resources :static_pages, only: [:root]

  root to: 'static_pages#root'
end
