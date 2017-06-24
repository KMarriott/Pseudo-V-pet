var AllItems = React.createClass({



	handleDelete(digimon) {
		let confirm = window.confirm(`Are you sure you want to delete ${digimon.species}?`)

		if (confirm === true){
			this.props.handleDelete(digimon.id);
	  	// this.props.removeDigimon(id);
	  	console.log('delete item clicked');
	  }
	},



	render() {	

		var eggs = this.props.digimon.map((digimon) => {
			if(digimon.stage==='egg'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});


		var babyI_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='babyI'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});

		var babyII_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='babyII'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});

		var child_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='child'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});

		var adult_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='adult'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});

		var perfect_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='perfect'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});

		var ultimate_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='ultimate'){
				return ( <Digimon digimon={digimon}
					digimons={this.props.digimon}
					handleDelete={this.handleDelete.bind(this, digimon)}
					handleEdit={this.handleEdit}
					editDigimonState={this.props.editDigimonState}/>
					)
			}
		});



		return (
			<div>
			
			<div className="digimon ">
			<h1>All Digimon</h1>
			
			<h3>Eggs</h3>
			<div className='Aligner border-top-bottom'>{eggs}</div>
			
			
			<h3>Baby I / Fresh</h3>
			<div className='Aligner border-top-bottom'>{babyI_digimon}</div>
			


			
			<h3>Baby II / In-Training</h3>
			<div className='Aligner border-top-bottom'>{babyII_digimon}</div>
			


			
			<h3>Child / Rookie</h3>
			<div className='Aligner border-top-bottom'>{child_digimon}</div>
			

			
			<h3>Adult / Champion</h3>
			<div className='Aligner border-top-bottom'>{adult_digimon}</div>
			

			
			<h3>Perfect / Ultimate</h3>
			<div className='Aligner border-top-bottom'>{perfect_digimon}</div>
			

			
			<h3>Ultimate / Mega</h3>
			<div className='Aligner border-top-bottom'>{ultimate_digimon}</div>
			
			</div>
			</div>
			)
	}

});