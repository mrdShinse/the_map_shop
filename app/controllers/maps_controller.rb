# frozen_string_literal: true

class MapsController < ApplicationController # :nodoc:
  def index
    @q = Map.ransack(params[:q])
    @maps = @q.result(distinct: true).includes(:user)
  end

  def new; end

  def show
    @map = Map.find(params[:id])
  end
end
