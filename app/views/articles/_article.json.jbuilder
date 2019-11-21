json.extract! article, :id, :title, :text, :tags, :created_at, :updated_at
json.url article_url(article, format: :json)
