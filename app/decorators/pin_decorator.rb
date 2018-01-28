# frozen_string_literal: true

module PinDecorator # :nodoc:
  def as_html_data
    content_tag(:div,
                '',
                'class' => 'pin-data-item',
                'data-name' => name,
                'data-lat'  => lat,
                'data-long' => long)
  end
end
