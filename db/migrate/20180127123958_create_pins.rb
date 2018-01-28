# frozen_string_literal: true

class CreatePins < ActiveRecord::Migration[5.1] # :nodoc:
  def change
    create_table :pins do |t|
      t.belongs_to :map, index: true
      t.string :name, null: false, default: ''
      t.string :memo, null: false, default: ''
      t.integer :priority, null: false, default: 0
      t.float :lat, null: false, default: 0, limit: 30
      t.float :long, null: false, default: 0, limit: 30

      t.timestamps
    end

    add_index :pins, %i[lat long]
  end
end
