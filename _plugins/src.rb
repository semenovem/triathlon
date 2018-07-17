module Jekyll
  module AssetFilter
    def createURL(url)
      ("/triathlon/" + url).gsub(/\/{2,}/, "/")
    end

    def urlOnSite(url)
      if (url)
        return ("/triathlon/" + url).gsub(/\/{2,}/, "/")
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
