# frozen_string_literal: true

class Map < ApplicationRecord # :nodoc:
  belongs_to :user
  has_many :pins, dependent: :destroy

  scope :mine, ->(user) { where(user: user) }
end
