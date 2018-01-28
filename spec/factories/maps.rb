# frozen_string_literal: true

FactoryBot.define do
  factory :map do
    association :user, factory: :user
  end
end
