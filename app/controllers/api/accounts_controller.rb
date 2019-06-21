class Api::AccountsController < ApplicationController
  before_action :authenticate_user! 

  def index
    render json: User.random_accounts(current_user.follow_accounts)
  end

  def show
    @account = Account.find(params[:id])
    render json: @account
  end 

  def update
    current_user.follow_accounts << params[:id].to_i
    current_user.save 
  end 

  def my_accounts 
    render json: User.follow(current_user.follow_accounts)
  end 

  def unfollow_accounts
    current_user.follow_accounts.delete(params[:id].to_i)
    current_user.save
  end

end
