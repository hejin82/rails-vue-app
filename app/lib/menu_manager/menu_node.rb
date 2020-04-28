module MenuManager
  class MenuNode
    include Enumerable
    attr_accessor :last_items_count, :name

    def initialize(name, contetnt = nil)
      @name = name
      @children = []
      @last_items_count = 0
    end

    def children
      if block_given?
        @children.each { |child| yield child }
      else
        @children
      end
    end

    def size
      @children.inject(1) { |sum, node| sum + node.size }
    end

    def each &block
      yield self
      children { |child| child.each(&block) }
    end

    def prepend(child)
      add_at(child, 0)
    end

    def add_at(child, position)
      raise "child already added" if find { |node| node.name == child.name }
      @children = @children.insert(position, child)
      child.parent = self
      child
    end

    def add_last(child)
      add_at(child, -1)
      @last_items_count += 1
      child
    end

    def add(child)
      position = @children.size - @last_items_count
      add_at(child, position)
    end
    alias :<< :add

    def remove!(child)
      @children.delete(child)
      @last_items_count -= +1 if child && child.last
      child.parent = nil
      child
    end

    def position
      self.parent.children.index(self)
    end

    def root
      root = self
      root = root.parent while root.parent
      root
    end
  end
end