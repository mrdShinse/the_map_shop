# frozen_string_literal: true

FactoryBot.define do
  sequence :fake_name do
    Faker::Name.name
  end
  sequence :fake_email do
    Faker::Internet.safe_email
  end
  sequence :fake_password do
    SecureRandom.alphanumeric
  end
end
