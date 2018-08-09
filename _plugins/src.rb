module Jekyll
  module AssetFilter
    def urlOnSite(url)
      if (url)
        return ("/triathlon/" + url).gsub(/\/{2,}/, "/")
      end
    end

    def srcDeepImg(path_l, path_r)
      return (path_l + "/" + path_r).gsub(/index\.html/, "").gsub(/\/{2,}/, "/")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
