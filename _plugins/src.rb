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

    # add hash to the file name
    # @example file.css => file.css?81a568
    def add_hash(s)
      site = @context.registers[:site]
      s + "?a" + site.config["short_hash_commit"].to_s.chomp("/")
    end


    #
    def src_get_path(src)
      # todo change for any file name
      src.gsub(/index\.html/, "").gsub(/index\.md/, "").gsub(/style\.css/, "").gsub(/script\.js/, "")
    end



    # make definition type args
    def src_add_path (path, name_files)
      result = []

      name_files.each do |name|
        result.push(check_url(path + '/' + name))
      end
      result
    end


    private

    def check_url(url)
      url.gsub(/\/{2,}/, "/")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
