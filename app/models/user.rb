class User < ActiveRecord::Base
  has_many :cheeses, :through => :likes
  has_many :likes
  has_secure_password
end
