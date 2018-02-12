# frozen_string_literal: true

module ApplicationHelper # :nodoc:
  def googlemap_include_tag(callback: nil, async: true)
    url = if callback.present?
            "https://maps.googleapis.com/maps/api/js?key=#{Settings.googlemap.key}&callback=#{callback}"
          else
            "https://maps.googleapis.com/maps/api/js?key=#{Settings.googlemap.key}"
          end

    if async
      javascript_include_tag url, async: 'async'
    else
      javascript_include_tag url
    end
  end
end
