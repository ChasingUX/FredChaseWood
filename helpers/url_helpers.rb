module UrlHelpers
  def current_page_url
    full_url_for(current_page.url)
  end

  def full_url_for(path)
    if path.start_with?('/')
      "http://www.fredchasewoodcraft.com#{path}"
    else
      "http://www.fredchasewoodcraft.com/#{path}"
    end
  end
end
