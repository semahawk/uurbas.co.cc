class Article < ActiveRecord::Base
	has_friendly_id :title, :use_slug => true
	has_many :comments, :dependent => :destroy
	
	validates_presence_of :title, :body
end
