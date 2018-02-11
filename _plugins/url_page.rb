module Jekyll
  module AssetFilter
    def urlPage(href)
      "/triathlon/" + href
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
