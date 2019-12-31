json.extract! form, :id, :first_name, :last_name, :email, :created_at, :updated_at
json.url form_url(form, format: :json)
