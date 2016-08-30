class Api::BenchesController < ApplicationController

  def index
    bench_params = params[:bounds]
    @benches = bench_params ? Bench.in_bounds(params[:bounds]) : Bench.all
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      puts @bench.errors.full_messages
      render json: "Failed to save."
    end
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end

end
