# frozen_string_literal: true

module MapDecorator # :nodoc:
  def as_html_card
    content_tag(:div, class: 'card') do
      concat(content_tag(:div, class: 'card-body') do
        concat(content_tag(:h5) do
          concat name
        end)
        concat(content_tag(:h6) do
          concat user.name_title
        end)
      end)
    end
  end
end
