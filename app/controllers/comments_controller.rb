class CommentsController < ApplicationController
	def new
		@article = Article.find(params[:article_id])
		@comment = Comment.new(:ancestry => params[:parent_id])
		
		render "comments/new", :locals => { :author => Comment.find(params[:parent_id]).author }
	end
	
	def create
		@article = Article.find(params[:article_id])
		@comment = @article.comments.create(params[:comment])
		@comment.save
		
		respond_to do |format|
			format.html do
				if @comment.errors.present?
					render :new
				else
					redirect_to article_path(@article)
				end
			end
			format.json
		end
	end
	
	def show
		@comment = Comment.find(params[:id])
	end
end
