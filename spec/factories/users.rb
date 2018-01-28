# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { generate :fake_name }
    email { generate :fake_email }
    password { generate :fake_password }
  end
end
