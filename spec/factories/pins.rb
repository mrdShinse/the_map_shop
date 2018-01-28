# frozen_string_literal: true

FactoryBot.define do
  factory :pin do
    association :map, factory: :map
    sequence :name do |n|
      "pin No.#{n}"
    end
  end
end
