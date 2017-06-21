var Body = React.createClass({


	componentDidMount() {
		$.getJSON('/api/v1/digimons.json', (response) => { this.setState({ digimon: response }) });
		console.log('Component mounted');

		// this.setState({
		// 	digimon: this.prop.digimon
		// })
	},
	updateDigimonState(data){
		var newState = this.state.digimon.concat(data);
		this.setState({ digimon: newState })
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

		console.log('in handle delete' + id);
	},
	removeDigimon(id) {
		var newDigimon = this.state.digimon.filter((digimon) => {
			console.log(digimon.id)
			return digimon.id != id;
		});

		this.setState({ digimon: newDigimon });
	},


	render() {
		return (
			<div> 

			<NewItems digimon={this.state.digimon} updateDigimonState={this.updateDigimonState}/>
			<AllItems  digimon={this.state.digimon} handleDelete={this.handleDelete} removeDigimon={this.removeDigimon}/>

			</div>
			)
	}
});