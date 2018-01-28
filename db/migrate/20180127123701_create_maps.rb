# frozen_string_literal: true

class CreateMaps < ActiveRecord::Migration[5.1] # :nodoc:
  def change
    create_table :maps do |t|
      t.belongs_to :user, index: true
      t.string :name, null: false, default: ''
      t.string :memo, null: false, default: ''

      t.timestamps
    end
  end
end
