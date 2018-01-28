# frozen_string_literal: true

module ApplicationHelper # :nodoc:
  def googlemap_include_tag(callback)
    javascript_include_tag "https://maps.googleapis.com/maps/api/js?key=#{Settings.googlemap.key}&callback=#{callback}", async: 'async'
  end
end
