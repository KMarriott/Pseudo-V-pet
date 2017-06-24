class CreateEvolutions < ActiveRecord::Migration[5.0]
  def change
    create_table :evolutions do |t|
      t.references :digimon, foreign_key: true
      t.string :species
      t.string :evolve_to
      t.integer :priority
      t.integer :love, default: "0"
      t.integer :strength, default: "0"
      t.integer :energy, default: "0"
      t.integer :health, default: "0"
      t.integer :hunger, default: "0"
      t.integer :hygiene, default: "0"
      t.string :love_type, default: ">"
      t.string :strength_type, default: ">"
      t.string :energy_type, default: ">"
      t.string :health_type, default: ">"
      t.string :hunger_type, default: ">"
      t.string :hygiene_type, default: ">"

      t.timestamps
    end
  end
end
