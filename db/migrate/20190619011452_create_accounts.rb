class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :age
      t.string :location
      t.string :avatar
      t.text :bio

      t.timestamps
    end
  end
end
