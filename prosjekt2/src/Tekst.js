import React from 'react';
import ReactDOM from 'react-dom';
import './tekst.css';


class Tekst extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			visible1: false,
			visible2: false,
			visible3: false,
			visible4: false,
			resultat1: "Klikk på knapp for å vise tekst",
			resultat2: "Klikk på knapp for å vise tekst",
			resultat3: "Klikk på knapp for å vise tekst",
			resultat4: "Klikk på knapp for å vise tekst",
		}
		
	}
	
    fetchData(a){
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat1: result.tekst, kategori: a}));

		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat2: result.tekst}));		

		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat3: result.tekst}));		

		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat4: result.tekst}));			
		
    }
	
	componentWillReceiveProps(props){
		this.setState({visible1: this.props.visible1, visible2: this.props.visible2, visible3: this.props.visible3, visible4: this.props.visible4})
	}

	

  
  render() {
	if(this.state.visible1){
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling1">{this.state.resultat1}</p>
      </div>
    );
	}else if(this.state.visible2){
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling2">{this.state.resultat2}</p>
      </div>
    );		
	}else if(this.state.visible3){
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling3">{this.state.resultat3}</p>
      </div>
    );		
	}else if(this.state.visible4){
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling4">{this.state.resultat4}</p>
      </div>
    );		
	}else{
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
      </div>
    );		
	}
  
  }
  
}

export default Tekst;
