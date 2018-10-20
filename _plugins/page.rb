module Jekyll
  class AddVarToPage < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      page = context.registers[:page]

      if @markup.empty?
        return "Error processing input, expected syntax: {% addVarToPage name variable value %}"
      end

      res = @markup.split('=')

      page[res[0]] = res[1]
      return nil
    end
  end
end

Liquid::Template.register_tag('addVarToPage', Jekyll::AddVarToPage)



module Jekyll
  module AssetFilter
    def addVarToPage(value, variable_name)
      page = @context.registers[:page]

      page[variable_name] = value

      return value
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
