class ProjectFilter
  attr_accessor :filter

  ALL = 'all'
  ITEM = 'item'
  FILTERS = [ALL, ITEM].freeze

  def initialize(filter)
    filter = filter.to_s.split(',')[0].to_s
    @filter = FILTERS.include?(filter) ? filter : ALL
  end

  def active?(key)
    filter == key.to_s
  end

  def apply_filter(events)
    case filter
    when ITEM
      events.where(action: 1)
    else
      events
    end
  end
end