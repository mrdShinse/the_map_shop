# frozen_string_literal: true

class MapsController < ApplicationController # :nodoc:
  def index
    @q = Map.ransack(params[:q])
    @maps = @q.result(distinct: true).includes(:user)
  end

  def new; end

  def create
    map = Map.new(map_params)
    if map.save
      render json: { code: 200, data: map }
    else
      render json: { code: 500, msg: 'some error occure.' }
    end
  end

  def update
    map = Map.find(params[:id])
    return render json: { code: 500, msg: 'this is not your map.' } unless map.user_id == current_user.id

    if map.update(map_params)
      render json: { code: 200, data: map }
    else
      render json: { code: 500, msg: 'some error occure.' }
    end
  end

  def show
    @map = Map.find(params[:id])
  end

  private

  def map_params
    params.require(:map).permit(:name).merge(user: current_user)
  end
end
