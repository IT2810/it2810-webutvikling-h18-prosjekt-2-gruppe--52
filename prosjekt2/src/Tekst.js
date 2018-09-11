import React from 'react';
import ReactDOM from 'react-dom';
import './tekst.css';

class Tekst extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			resultat: "Klikk på knapp for å vise tekst",
		}
		
	}
	
    fetchData(a){
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat: result.tekst}));
    }
	

  
  render() {
    return (

      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori1)} />{this.props.kategori1}
		<br/>
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori2)} />{this.props.kategori2}
		<br/>
		<input type="radio" name="tekst" onClick={()=>this.fetchData(this.props.kategori3)} />{this.props.kategori3}	  
		</div>
		<p id="pResult">{this.state.resultat}</p>
      </div>
    );
  }
  
}

export default Tekst;
