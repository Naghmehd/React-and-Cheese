class Cheese < ActiveRecord::Base
  belongs_to :users
  has_many :likes
  has_many :users, :through => :likes, source: :user
  accepts_nested_attributes_for :users

  def likes_count
    likes.count
  end
end
