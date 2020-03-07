class CreateApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :applications do |t|
      t.integer :pet_id
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :status

      t.timestamps
    end
  end
end
