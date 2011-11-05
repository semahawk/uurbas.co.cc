class Comment < ActiveRecord::Base
	belongs_to :article
	has_ancestry
	
	validates_presence_of :author, :email, :body
end
