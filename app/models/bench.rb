class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    @benches = Bench.all
    resultsArr = []

    @benches.each do |bench|
      if bench["lat"].between?(bounds["southWest"]["lat"].to_f, bounds["northEast"]["lat"].to_f) &&
          bench["lng"].between?(bounds["southWest"]["lng"].to_f, bounds["northEast"]["lng"].to_f)

        resultsArr << bench
      end
    end

    resultsArr
  end

end
