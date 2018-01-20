# frozen_string_literal: true

class HomeController < ApplicationController # :nodoc:
  def index
    redirect_to dashboard_path if user_signed_in?
  end
end
