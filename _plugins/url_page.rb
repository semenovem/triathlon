module Jekyll
  module AssetFilter
    def urlPage(href)
      "/" + href
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
