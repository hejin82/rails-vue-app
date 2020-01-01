# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include ApplicationHelper
  prepend_view_path Rails.root.join("app", "javascript")
end
