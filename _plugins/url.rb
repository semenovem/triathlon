module Jekyll
  class Url < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      page = context.registers[:page]

      if @markup.empty?
        return "Error processing input, expected syntax: {% url name variable value %}"
      end

      props = @markup

      up = def_len_path(page['url'])

      (up == 0 ? './' : '../' * up) + props
    end


    private

    def def_len_path(path)
      path.scan(/\//).size - 1
    end
  end
end

Liquid::Template.register_tag('url', Jekyll::Url)




module Jekyll
  module AssetFilter
    def url(resource)
      page = @context.registers[:page]
      up = def_len_path(page['url'])

      (up == 0 ? './' : '../' * up) + resource
    end


    private

    def def_len_path(path)
      path.scan(/\//).size - 1
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
