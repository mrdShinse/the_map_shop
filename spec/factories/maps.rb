# frozen_string_literal: true

FactoryBot.define do
  factory :map do
    association :user, factory: :user
    sequence :name do |n|
      "map No.#{n}"
    end
  end
end
