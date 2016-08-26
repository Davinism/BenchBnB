class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      puts @bench.errors.full_messages
      render json: "Failed to save."
    end
  end

  private:
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
