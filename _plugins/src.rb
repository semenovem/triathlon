module Jekyll
  module AssetFilter
    def urlOnSite(url)
      if (url)
        return ("/triathlon/" + url).gsub(/\/{2,}/, "/")
      end
    end

    def phoneFormat(phone)
      if (phone)
        return phone.gsub(/\s/, "")
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
