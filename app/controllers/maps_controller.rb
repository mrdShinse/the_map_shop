# frozen_string_literal: true

class MapsController < ApplicationController # :nodoc:
  def index
    @maps = Map.all.order(:id)
  end

  def new; end

  def show
    @map = Map.find(params[:id])
  end
end
