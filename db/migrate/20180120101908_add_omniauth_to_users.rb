# frozen_string_literal: true

class AddOmniauthToUsers < ActiveRecord::Migration[5.1] # :nodoc:
  def change
    add_column :users, :provider, :string, after: :email
    add_column :users, :uid, :string, after: :provider
  end
end
