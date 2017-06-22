var Evolutions = React.createClass({


	componentDidMount() {
		$.getJSON('/api/v1/evolutions.json', (response) => { 
			console.log('Evolutions get')
			console.log(this.props.digimons)

			// var target_evolutions = response.filter((Evolutionslution) => {
			// return evolution.digimon_id = this.props.digimon.id;
			console.log(response)
			let evolutions = []
			for(var x in response){
				if(response[x].digimon_id === this.props.digimon.id)
				{	
					evolutions.push(response[x])
				}
			}

			console.log(evolutions)

			this.setState({
				evolutions: evolutions
			})
			// const allowed = [this.props.digimon.id];

			// const filtered = Object.keys(response)
			// .filter(key => allowed.includes(key))						
			// .reduce((obj, key) => {
			// 	obj[key] = raw[key];
			// 	return obj;
			// }, 	{});


		});
		// console.log(this.props.digimon.id)
		// console.log(target_evolutions)



	},

	getInitialState() {
		return {
			evolutions: []
		}
	},
	handleEdit(e) {
		e.preventDefault()
	},



	changeStage(e){
		this.setState({
			new_stage: e.target.value
		})
	},
	changeImage(e){
		this.setState({
			new_image: e.target.value
		})

	},
	changeSpecies(e){
		this.setState({
			new_species: e.target.value
		})

	},

	submitForm(e) {
		e.preventDefault()
	},


	render() {

		var evolution_options = this.state.evolutions.map((evolution) => {

			let evolve_digimon = ''
			let list_of_digimon = this.props.digimons
			for(var x in list_of_digimon){
				if(list_of_digimon[x].species === evolution.evolve_to)
				{	
					console.log(list_of_digimon[x])
					evolve_digimon = list_of_digimon[x]
				}
			}

			return (<div className='center column' key={evolution.id}>
				<div>{evolution.evolve_to}</div>
				<img src={evolve_digimon.image}/>
				<div>Priority - {evolution.priority}</div>
				<div>Requirements</div>
				<div>Love - {evolution.love}</div>
				<div>Strength - {evolution.strength}</div>
				<div>Health - {evolution.health}</div>
				<div>Hunger - {evolution.hunger}</div>
				<div>Hygiene - {evolution.hygiene}</div>
				<div>Energy - {evolution.energy}</div>
				</div>)
		})

		return ( 
			<div>
			Evolutions
			
			<div className='row'>
			{evolution_options}
			</div>
			
			</div>
			)
	}
});