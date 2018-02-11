module Jekyll
  module AssetFilter
    def hardSpace(txt)
      txt.gsub(/\s+/, "\u00A0")
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
