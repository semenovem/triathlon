module Jekyll
  module AssetFilter
    def urlOfPageTags(tagName)
      "tags/" + tagName.gsub(/\s+/, "_").downcase
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
