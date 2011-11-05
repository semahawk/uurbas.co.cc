class CreateComments < ActiveRecord::Migration
  def self.up
    create_table :comments do |t|
      t.string :author
      t.text :body
      t.string :website
      t.string :email
      t.references :article
      t.string :ancestry
      t.integer :position

      t.timestamps
    end
    
    add_index :comments, :ancestry
    add_index :comments, :article_id
  end

  def self.down
    drop_table :comments
    remove_index :comments, :ancestry
  end
end
