var EvoSelect = React.createClass({

	getInitialState() {
		return {
			evolution: this.props.evolution,
			type: this.props.type,
			stat: this.props.stat
		}
	},

	changeType(e, name){
		new_evolution = this.state.evolution
		new_evolution[`${name}_type`] = e.target.value

		this.setState({
			evolultion_: new_evolution
		})
	},

	changeStat(e, name){
		new_evolution = this.state.evolution
		new_evolution[name] = e.target.value

		this.setState({
			evolultion_: new_evolution
		})
	},

	stat_form(name, type, stat){
			return <div><select onChange={(event) => this.changeType(event, name)} defaultValue={type}>{type}<option value="=">Equal to</option>
			<option value=">"> More than</option>
			<option value="<"> Less than</option>
			</select>
			<input onChange={(event) => this.changeStat(event, name)} placeholder={stat}></input></div>
	},

	handleSubmit(e){
		e.preventDefault()
		console.log(this.state.evolution)
		var confirm = window.confirm(`Do you want to update ${this.state.evolution.species}`)
			if(confirm === true)
			{
				$.ajax({
					url: `/api/v1/evolutions/${this.state.evolution.id}`,
					type: 'PUT',
					data: { evolution: this.state.evolution },
					success: (response) => {
						console.log('it worked!', response);
						alert(`You updated ${this.state.evolution.species}.`)

					}
				});
			}
	},
	handleDelete(e){
		e.preventDefault()
		alert("Please code delete")
	},

	render(){
		var evolution = this.state.evolution

		return(


			<div className='center column border' key={evolution.id}>
				<div>Evolution #{evolution.priority}</div>
				<div>{evolution.evolve_to}</div>
				<img src={this.props.evolve_digimon.image}/>
				<div>Requirements</div>
				<div>Love {this.stat_form('love', evolution.love_type, evolution.love)}</div>
				<div>Strength {this.stat_form('strength', evolution.strength_type, evolution.strength)}</div>
				<div>Health {this.stat_form('health', evolution.health_type, evolution.health)}</div>
				<div>Hygiene {this.stat_form('hygiene', evolution.hunger_type, evolution.hunger)}</div>
				<div>Energy {this.stat_form('energy', evolution.energy_type, evolution.energy)}</div>

				<button onClick={this.handleSubmit}> Submit </button>
				<button onClick={this.handleDelete}> Delete </button>
				<br/>
			</div>
				





			)
	}

})


