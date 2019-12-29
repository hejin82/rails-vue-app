module ApplicationHelper
  # check if a particular controller is the current ont
  # current_controller?(:path)
  # current_controller?('app/path')
  def current_controller?(*args)
    args.any? do |v|
      v.to_s.downcase == controller.controller_name || v.to_s.downcase == controller.controller_path
    end
  end

  # check if a particular action is the current ont
  # current_action?(:new)
  # current_action?(:new, :create)
  def current_action?(*args)
    args.any? do |v|
      v.to_s.downcase == action_name
    end
  end

  def active_when(condition)
    'active' if condition
  end

  def filter_link(key, text, tooltip)
    key = key.to_s
    active = 'active' if @event_filter.active?(key)
    link_options = {
      class: 'nav-link event-filter-link',
      id:    "#{key}_event_filter",
      title: tooltip
    }
    content_tag :li, class: active.to_s + 'nav-item' do
      link_to request.path, link_options do
        content_tag(:span, ' ' + text)
      end
    end
  end

  def event_filter
    @event_filter ||=
      ProjectFilter.new(params[:filter].presence || cookies[:filter]).tap do |new_filter|
        cookies[:filter] = new_filter.filter
      end
  end
end
