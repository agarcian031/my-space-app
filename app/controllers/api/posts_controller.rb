class Api::PostsController < ApplicationController
  before_action :set_account
  before_action :set_post, only: [:update, :destroy]

  def index 
    render json: @account.posts.all.order("created_at")
  end 

  # def show 
  # end 

  def create
    post = @account.posts.new(post_params)
    if post.save 
      render json: post
    else 
      render json: post.errors, status: 422 
    end 
  end 

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @post.errors, status: 422 
    end 
  end 

  def destroy 
    @post.destroy
  end 

  private 
  def set_account
    @account = Account.find(params[:account_id])
  end 

  def set_post 
    @post = Post.find(params[:id])
  end 

  def post_params 
    params.require(:post).permit(:title, :body)
  end 
end
