class User < ActiveRecord::Base

  has_many :cheeses, :through => :likes, source: :cheese
  accepts_nested_attributes_for :cheeses
  has_many :likes
  has_secure_password

  def liked_count
    likes.count
  end
end
