Rails.application.routes.draw do
  get "admins" => "admins#index"
  post "admins" => "admins#create"
  delete "admins/:id" => "admins#destroy"
end
