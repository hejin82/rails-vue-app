module MenuManager
  class Mapper
    attr_reader :menu, :menu_items

    def initialize(menu, items)
      items[menu] ||= MenuNode.new(:root, {})
      @menu = menu
      @menu_items = items[menu]
    end

    def push(name, url, options={})
      options = options.dup
      if options[:parent]
        subtree = self.find(options[:parent])
        if subtree
          target_root = subtree
        else
          target_root = @menu_items.root
        end
      else
        target_root = @menu_items.root
      end
      if first = options.delete(:first)
        target_root.prepend(MenuItem.new(name, url, options))
      elsif before = options.delete(:before)
        if exists?(before)
          target_root.add_at(MenuItem.new(name, url, options), position_of(before))
        else
          target_root.add(MenuItem.new(name, url, options))
        end
      elsif after = options.delete(:after)
        if exists?(after)
          target_root.add_at(MenuItem.new(name, url, options), position_of(after) + 1)
        else
          target_root.add(MenuItem.new(name, url, options))
        end
      elsif options[:last]
        target_root.add_last(MenuItem.new(name, url, options))
      else
        target_root.add(MenuItem.new(name, url, options))
      end
    end

    def delete(name)
      if found = self.find(name)
        @menu_items.remove!(name)
      end
    end

    def exists?(name)
      @menu_items.any? {|node| node.name == name}
    end

    def find(name)
      @menu_items.find {|node| node.name == name}
    end

    def position_of(name)
      @menu_items.each do |node|
        if node.name == name
          return node.position
        end
      end
    end
  end
end