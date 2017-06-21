//https://facebook.github.io/react/docs/forms.html


var NewItems = React.createClass({
			getInitialState() {
				return {
					species: '',
					image: '',
					stage: 'Egg',
					message: 'ok'
				}
			},
	submitForm(e) {
		e.preventDefault()
		var species = this.state.species;
		var stage = this.state.stage;
		var image = this.state.image;

				// console.log('The name value is ' + species + 'the description value is ' + stage + 'and image is ' + image);
				console.log(this.state)

				$.ajax({
					url: '/api/v1/digimons',
					type: 'POST',
					data: { digimon: { species: species, stage: stage, image: image } },
					success: (response) => {
						console.log('it worked!', response);
							this.props.updateDigimonState(response)
							
							this.setState({
								message: response.species + " Added!"
						});
					}
				});



			},
			changeStage(e){

				this.setState({
					stage: e.target.value
				})
			},
			changeImage(e){
				this.setState({
					image: e.target.value
				})

			},
			changeSpecies(e){
				this.setState({
					species: e.target.value
				})

			},




			render() {

				return(
					<div className="column">
					<h2>Add New Digimon</h2>
					
					<form className="column" onSubmit={this.submitForm}>
					Species <input name='species' placeholder='Enter the species name of your digimon' onChange={this.changeSpecies}/>
					Image <input name='image' placeholder='Enter an image url for now' onChange={this.changeImage}/>
					
					



					Stage <select name="stage" onChange={this.changeStage}>
					<option value="egg">Egg</option>
					<option value="babyI">Baby I / Fresh</option>
					<option value="babyII">Baby II / In-Training</option>
					<option value="child">Child / Rookie</option>
					<option value="adult">Adult / Champion</option>
					<option value="perfect">Perfect / Ultimate</option>
					<option value="ultimate">Ultimate / Mega</option>
					</select>

					<button>Submit</button>
					</form>
					<div>{this.state.message}</div>
					




					</div>
					)

			}
		});	