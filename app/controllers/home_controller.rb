# frozen_string_literal: true

class HomeController < ApplicationController # :nodoc:
  def index
    @maps = Map.mine(current_user)
  end
end
