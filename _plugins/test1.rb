module Jekyll
  class IncludesCssFiles < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      if @markup.empty?
        return "Error processing input, expected syntax: {% asset_path filename post_id %}"
      end

      #render the markup
      params = Liquid::Template.parse(@markup).render context

      # todo добавить парсинг агрументов, что бы передавать более одного пути за раз

      page = context.registers[:page]
      unless page["pIncludesCss"]
        page["pIncludesCss"] = []
      end
      page["pIncludesCss"] = page["pIncludesCss"].push(params).uniq
      return nil
    end
  end
end

Liquid::Template.register_tag('includesCssFiles', Jekyll::IncludesCssFiles)



module Jekyll
  class GetIncludesCssFiles < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      page = context.registers[:page]
      page["pIncludesCss"]
    end
  end
end

Liquid::Template.register_tag('getIncludesCssFiles', Jekyll::GetIncludesCssFiles)


