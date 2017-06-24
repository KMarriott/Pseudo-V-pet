var Body = React.createClass({


	componentDidMount() {
		$.getJSON('/api/v1/digimons.json', (response) => { this.setState({ digimon: response }) });
		console.log('Component mounted');

		this.setState({
			view: false,
			new: false

		})
	},
	updateDigimonState(data){
		var newState = this.state.digimon.concat(data);
		this.setState({ digimon: newState })
	},
	editDigimonState(response_digimon) {
		var digimons = this.state.digimon.filter((i) => { return i.id != response_digimon.id });
		digimons.push(response_digimon);
		this.setState({digimon: digimons });
	},
	getInitialState() {
		return {
			digimon: []
		}
	},
	handleDelete(id) {
		var removeDigimon = this.removeDigimon
		$.ajax({
			url: `/api/v1/digimons/${id}`,
			type: 'DELETE',
			success(response) {
				removeDigimon(id)
				console.log('successfully removed digimon')
			}
		});
	},
	removeDigimon(id) {
		var newDigimon = this.state.digimon.filter((digimon) => {
			return digimon.id != id;
		});

		this.setState({ digimon: newDigimon });
	},
	handlenewClick(e){
		this.setState({
			new: !this.state.new
		})

	},
		handleviewClick(e){
		this.setState({
			view: !this.state.view
		})

	},


	render() {
		return (
			<div className="center"> 

			<div>Virtual Pet CRUD</div>
			<p>CRUD app for manipulating the backend of the Virtual Pet APP written in Ruby on Rails and React using <a href="https://github.com/reactjs/react-rails">React-Rails</a> gem. Hosted on a Postgres Server</p>
			<div><a href="/api/v1/digimons.json">Digimon API  GET results</a></div>
			<div><a href="/api/v1/evolutions.json">Evolution API GET results</a></div>
			
			<div className="row">
			<div className="border new_button" onClick={this.handlenewClick}> Add New Digimon </div>
			<div className="border new_button" onClick={this.handleviewClick}> View All Digimon </div>
			</div>

			{ this.state.new ? 
			<NewItems digimon={this.state.digimon} updateDigimonState={this.updateDigimonState}/>
			: "" }

			{ this.state.view? 
			<AllItems  digimon={this.state.digimon} handleDelete={this.handleDelete} removeDigimon={this.removeDigimon} editDigimonState={this.editDigimonState}/>
			: "" }

			</div>
			)
	}
});