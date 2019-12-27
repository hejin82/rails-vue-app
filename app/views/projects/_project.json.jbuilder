json.extract! project, :id, :name, :desc, :creator, :owner, :created_at, :updated_at
json.url project_url(project, format: :json)
