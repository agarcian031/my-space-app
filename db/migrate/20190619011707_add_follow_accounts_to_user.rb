class AddFollowAccountsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :follow_accounts, :text
  end
end
