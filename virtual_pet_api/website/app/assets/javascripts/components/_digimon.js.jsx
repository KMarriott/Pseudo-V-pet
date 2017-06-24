var Digimon = React.createClass({

	getInitialState() {
		return {
			editable: false,
			new_species: this.props.digimon.species,
			new_image: this.props.digimon.image,
			new_stage: this.props.digimon.stage,
		}
	},
	handleEdit(e) {
		e.preventDefault()

		if(this.state.editable) {

			var species = this.state.new_species;
			var stage = this.state.new_stage;
			var image = this.state.new_image;
			var confirm = window.confirm(`Do you want to add ${species}`)
			if(confirm === true)
			{
				$.ajax({
					url: `/api/v1/digimons/${this.props.digimon.id}`,
					type: 'PUT',
					data: { digimon: { species: species, stage: stage, image: image } },
					success: (response) => {
						console.log('it worked!', response);
						alert(`You updated ${species}.`)
						this.props.editDigimonState(response)

					}
				});
			}

		}
		this.setState({editable: !this.state.editable})
	},
	handleCancel(e) {
		e.preventDefault()

		this.setState({editable: !this.state.editable})
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
		var species = this.state.editable ? <input type='text' defaultValue={this.props.digimon.species} onChange={this.changeSpecies}/> : <p>{this.props.digimon.species}</p>;
		var image = this.state.editable ? <input type='text' defaultValue={this.props.digimon.image} onChange={this.changeImage}/>: <img src={this.props.digimon.image}/>;
		var stage =	this.state.editable ? <select name="stage" defaultValue={this.props.digimon.stage} onChange={this.changeStage}> <option value="egg">Egg</option> <option value="babyI">Baby I / Fresh</option> <option value="babyII">Baby II / In-Training</option> <option value="child">Child / Rookie</option> <option value="adult">Adult / Champion</option> <option value="perfect">Perfect / Ultimate</option> <option value="ultimate">Ultimate / Mega</option> </select> : "";


		return ( 
			<form className="column">
			<div className='center margin border' key={this.props.digimon.id}>
			{this.state.editable ? <img src={this.state.new_image}/> : ""}
			<div>{image}</div>
			<div>{species}</div>
			<div>{this.state.editable ? "Stage :" : ""} {stage}</div>

			<div>{this.state.editable ? <Evolutions digimon= {this.props.digimon} digimons={this.props.digimons}/> : ""}</div>

			<button onClick={this.props.handleDelete} >Delete</button>
			<button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
			{this.state.editable ? <button onClick={this.handleCancel}>Cancel</button> : '' } 
			</div></form>
			)
	}
});