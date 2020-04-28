module MenuManager
  class MenuItem < MenuNode
    include Redmin::I18n
    attr_reader :name, :url, :param, :condition, :parent, :child_menus, :last, :permission

    def initialize(name, url, options={})
      @name = name
      @url = url
      @condition = options[:if]
      @permission = options[:permission]
      @permission ||= false if options.key?(:permission)
      @param = options[:param] || :id
      @caption = options[:caption]
      @html_options = options[:html] || {}
      @parent = options[:parent]
      @child_menus = options[:children]
      @last = options[:last] || false
      super @name.to_sym
    end

    def caption
      if @caption.is_a?(Proc)
        c = @caption.call.to_s
        c = @name.to_s.humanize if c.blank?
        c
      else
        if @caption.nil?
          l_or_humanize(name, :prefix => 'label_')
        else
          @caption.is_a?(Symbol) ? l(@caption) : @caption
        end
      end
    end

    def html_options(options={})
      if options[:selected]
        o = @html_options.dup
        o[:class] += ' selected'
        o
      else
        @html_options
      end
    end

    def allowed?(user)
      if url.blank?
        all_children = children
        all_children += child_menus.call if child_menus
        return false unless all_children.detect { |child| child.allowed?(user) }
      elsif user
        if permission
          unless user.allowed_to?(permission)
            return false
          end
        elsif permission.nil? && url.is_a?(Hash)
          unless user.allowed_to?(url)
            return false
          end
        end
      end
      if condition && !condition.call
        return false
      else
        return true
      end
    end
  end
end