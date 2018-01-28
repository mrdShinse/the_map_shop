# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# database
gem 'mysql2', '>= 0.3.18', '< 0.5'
# app-server
gem 'puma', '~> 3.7'

# auth
gem 'devise'
gem 'omniauth'
gem 'omniauth-facebook'

# view
gem 'slim-rails'
# css
gem 'sass-rails', '~> 5.0'
# js
gem 'coffee-rails'
gem 'uglifier', '>= 1.3.0'
# frontend
gem 'webpacker'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  # factory
  gem 'factory_bot_rails'
  gem 'faker'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # linter
  gem 'dm_linters'
  gem 'rubocop'
end
