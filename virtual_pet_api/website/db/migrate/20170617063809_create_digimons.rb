class CreateDigimons < ActiveRecord::Migration[5.0]
  def change
    create_table :digimons do |t|
      t.string :species
      t.string :stage
      t.string :image

      t.timestamps
    end
  end
end
