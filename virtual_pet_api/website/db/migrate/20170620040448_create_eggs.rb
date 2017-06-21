class CreateEggs < ActiveRecord::Migration[5.0]
  def change
    create_table :eggs do |t|
      t.string :species
      t.string :stage
      t.string :image

      t.timestamps
    end
  end
end
