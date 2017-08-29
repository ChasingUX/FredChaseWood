# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# activate :autoprefixer do |prefix|
#   prefix.browsers = "last 2 versions"
# end

activate :livereload, no_swf: true

activate :directory_indexes

# Sprockets
activate :sprockets

after_configuration do
  sprockets.append_path File.join( root, "bower_components/" )
end


config[:layouts_dir] = 'templates/_layouts'

#Assets
# set :css_dir,    'assets/css'
# set :js_dir,     'assets/js'
# set :images_dir, 'assets/images'

config[:css_dir] = 'assets/css'
config[:js_dir] = 'assets/js'
config[:images_dir] = 'assets/images'


# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
# page '/*.xml', layout: false
# page '/*.json', layout: false
# page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

activate :blog do |blog|
  blog.name      = "blog"
  blog.paginate  = false
  blog.prefix    = "work"
  blog.layout    = :blog
  blog.permalink = "{title}.html"
  blog.sources   = "{title}.html"
  blog.page_link = "page/{num}"
end

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

configure :build do
  activate :autoprefixer do |config|
    config.browsers = ['last 20 versions']
  end
  activate :minify_javascript
  activate :minify_css
  activate :asset_hash
  activate :relative_assets
end
