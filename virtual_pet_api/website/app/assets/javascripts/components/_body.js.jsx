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

	render() {
		return (
			<div> 

			<NewItems digimon={this.state.digimon} updateDigimonState={this.updateDigimonState}/>
			<AllItems  digimon={this.state.digimon}/>

			</div>
			)
	}
});