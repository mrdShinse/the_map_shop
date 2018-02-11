# frozen_string_literal: true

class DashboardController < ApplicationController # :nodoc:
  def index
    @maps = Map.mine(current_user)
  end
end
