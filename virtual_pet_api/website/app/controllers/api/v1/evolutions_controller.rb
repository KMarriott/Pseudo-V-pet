class Api::V1::EvolutionsController < Api::V1::BaseController
	
	def index
		respond_with Evolution.all 
	end

	def create
		respond_with :api, :v1, Evolution.create(evolution_params) 
	end

	def destroy
		respond_with Evolution.destroy(params[:id]) 
	end 

	def update

		evolution = Evolution.find(params["id"])
		evolution.update_attributes(evolution_params)
		respond_with evolution, json: evolution 
	end

	private

	def evolution_params
		params.require(:evolution).permit(:id, :digimon_id, :energy, :energy_type, :evolve_to, :health, :health_type, :hygiene, :hygiene_type, :love, :love_type, :priority, :strength, :strength_type) 
	end 

end
