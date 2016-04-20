class Cheese < ActiveRecord::Base

  has_many :likes
  has_many :users, :through => :likes
  accepts_nested_attributes_for :users
end
