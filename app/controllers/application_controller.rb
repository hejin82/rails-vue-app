class ApplicationController < ActionController::Base
  include ApplicationHelper
  prepend_view_path Rails.root.join('app', 'javascript')
end
