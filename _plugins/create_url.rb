module Jekyll
  module AssetFilter
    def createURL(url)
      ("/triathlon/" + url).gsub(/\/{2,}/, "/")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
