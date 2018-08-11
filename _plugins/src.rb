module Jekyll
  module AssetFilter
    def urlOnSite(url)
      if (url)
        return ("/" + url).gsub(/\/{2,}/, "/")
      end
    end

    def srcDeepImg(path_l, path_r)
      return (path_l + "/" + path_r).gsub(/index\.html/, "").gsub(/\/{2,}/, "/")
    end


    def add_hash(s)
      site = @context.registers[:site]
      s + "?a" + site.config["short_hash_commit"].to_s.chomp("/")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
