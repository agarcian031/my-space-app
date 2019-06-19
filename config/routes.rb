Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
 
  namespace :api do
    resources :accounts, only: [:index, :update, :show]
    get 'my_accounts', to: 'accounts#my_accounts'
  end 
end
