var AllItems = React.createClass({
	render() {


		var digimons= this.props.digimon.map((digimon) => {
			return (<div> <img src={digimon.image}/> <p>{digimon.species}</p> </div>) });
		
		var eggs = this.props.digimon.map((digimon) => {
			if(digimon.stage==='egg'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});


		var babyI_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='babyI'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});

				var babyII_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='babyII'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});

		var child_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='child'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});

		var adult_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='adult'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});

		var perfect_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='perfect'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/> <p>{digimon.species}</p> </div> 
			}
		});

		var ultimate_digimon = this.props.digimon.map((digimon) => {
			if(digimon.stage==='ultimate'){
				return <div className='center margin' key={digimon.id}> <img src={digimon.image}/><p>{digimon.species}</p> </div> 
			}
		});



		return (
			<div>
			
			<div className="digimon">
			<h1>All Digimon</h1>
			{
			// 
			// <h3>Eggs</h3>
			// {eggs}
			// </div>
}
			
			
			<h3>Baby I </h3>
			<div className='Aligner'>{babyI_digimon}</div>
			</div>


			
			<h3>Baby II</h3>
			<div className='Aligner'>{babyII_digimon}</div>
			


			
			<h3>Child</h3>
			<div className='Aligner'>{child_digimon}</div>
			

			
			<h3>Adult</h3>
			<div className='Aligner'>{adult_digimon}</div>
			

			
			<h3>Perfect</h3>
			<div className='Aligner'>{perfect_digimon}</div>
			

			
			<h3>Ultimate</h3>
			<div className='Aligner'>{ultimate_digimon}</div>
			

			</div>
			)
	}

});