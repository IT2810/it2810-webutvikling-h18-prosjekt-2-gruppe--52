import React from 'react';
import ReactDOM from 'react-dom';
import './tekst.css';


class Tekst extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			resultat1: "",
			resultat2: "",
			resultat3: "",
			resultat4: "",
			kategori: "inital",
		}
		
	}
	
    fetchData(a){
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat1: result.tekst}));
		/*
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat2: result.tekst}));		
		
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat3: result.tekst}));		
		
		fetch(a+(Math.floor(Math.random()*4)+1)+".json")
	    .then(response => response.json())
	    .then(result => this.setState({resultat4: result.tekst}));	
		
		
		Mottar visible/true
		Henter data og setter loaded til true, henter kun hvis loaded er false eller noe
		
		
		
		*/	
		
    }
	
	setKategori(a){
		this.setState({kategori: a, resultat1: "", resultat2: "", resultat3: "", resultat4: ""});
	}
	
	
	fetchUtstilling1(a){

		if(this.state.resultat1==""){
			fetch(a+(Math.floor(Math.random()*4)+1)+".json")
			.then(response => response.json())
			.then(result => this.setState({resultat1: result.tekst}));
		}
	}
	
	fetchUtstilling2(a){
		if(this.state.resultat2==""){
			fetch(a+(Math.floor(Math.random()*4)+1)+".json")
			.then(response => response.json())
			.then(result => this.setState({resultat2: result.tekst}));
		}
	}
	fetchUtstilling3(a){
		if(this.state.resultat3==""){
			fetch(a+(Math.floor(Math.random()*4)+1)+".json")
			.then(response => response.json())
			.then(result => this.setState({resultat3: result.tekst}));
		}
	}
	fetchUtstilling4(a){
		if(this.state.resultat4===""){
			fetch(a+(Math.floor(Math.random()*4)+1)+".json")
			.then(response => response.json())
			.then(result => this.setState({resultat4: result.tekst}));
		}
	}

  
  render() {
	  console.log(this.state.resultat1);
	if(!this.props.visible1 && !this.props.visible2 && !this.props.visible3 && !this.props.visible4){
		return(
	  <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling1"></p>
      </div>
		);
	}
	if(this.props.visible1){
		this.fetchUtstilling1(this.state.kategori);
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling1">{this.state.resultat1}</p>
      </div>
    );
	}else if(this.props.visible2){
		this.fetchUtstilling2(this.state.kategori);
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling2">{this.state.resultat2}</p>
      </div>
    );		
	}else if(this.props.visible3){
		this.fetchUtstilling3(this.state.kategori);
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling3">{this.state.resultat3}</p>
      </div>
    );		
	}else if(this.props.visible4){
		this.fetchUtstilling4(this.state.kategori);
		return(
      <div id="tekstBoks">
		<div id="knapper">
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori1)} />{this.props.kategori1}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori2)} />{this.props.kategori2}
		<input type="radio" name="tekst" onClick={()=>this.setKategori(this.props.kategori3)}/>{this.props.kategori3}		
		</div>
		<p className="pResult" id="utstilling4">{this.state.resultat4}</p>
      </div>
    );		
	}
  
  }
  
}

export default Tekst;
