class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.time :start_time
      t.time :end_time
      t.date :date
      t.integer :user_id

      t.timestamps
    end
  end
end
