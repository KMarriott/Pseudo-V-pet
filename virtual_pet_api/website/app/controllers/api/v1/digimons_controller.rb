class Api::V1::DigimonsController < Api::V1::BaseController
	
	def index
		respond_with Digimon.all 
	end

	def create
		respond_with :api, :v1, Digimon.create(digimon_params) 
	end

	def destroy
		respond_with Digimon.destroy(params[:id]) 
	end 

	def update

		digimon = Digimon.find(params["id"])
		digimon.update_attributes(digimon_params)
		respond_with digimon, json: digimon 
	end

	private

	def digimon_params
		params.require(:digimon).permit(:species, :image, :stage) 
	end 

end
