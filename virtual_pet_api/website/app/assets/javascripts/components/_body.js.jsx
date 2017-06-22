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


	render() {
		return (
			<div> 

			<NewItems digimon={this.state.digimon} updateDigimonState={this.updateDigimonState}/>
			<AllItems  digimon={this.state.digimon} handleDelete={this.handleDelete} removeDigimon={this.removeDigimon} editDigimonState={this.editDigimonState}/>

			</div>
			)
	}
});