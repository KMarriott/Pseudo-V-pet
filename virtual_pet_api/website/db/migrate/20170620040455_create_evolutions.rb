class CreateEvolutions < ActiveRecord::Migration[5.0]
  def change
    create_table :evolutions do |t|
      t.references :digimon, foreign_key: true
      t.string :species
      t.string :evolve_to
      t.integer :priority
      t.string :love, default: ">0"
      t.string :strength, default: ">0"
      t.string :energy, default: ">0"
      t.string :health, default: ">0"
      t.string :hunger, default: ">0"
      t.string :hygiene, default: ">0"

      t.timestamps
    end
  end
end
