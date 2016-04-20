class User < ActiveRecord::Base

  has_many :cheeses, :through => :likes
  accepts_nested_attributes_for :cheeses
  has_many :likes
  has_secure_password
end
