import React from 'react';
import ReactDOM from 'react-dom';
import Tekst from './Tekst';

class Utstilling extends React.Component {
	constructor(props){
		super(props);
		this.state={
			visible1: false,
			visible2: false,
			visible3: false,
			visible4: false,
			finished: false,
			
		}
	}
	
	utstilling1(){
		this.setState({visible1: true,
					   visible2: false,
					   visible3: false,
					   visible4: false,});
	}
	utstilling2(){
		this.setState({visible1: false,
					   visible2: true,
					   visible3: false,
					   visible4: false});
	}
	utstilling3(){
		this.setState({visible1: false,
					   visible2: false,
					   visible3: true,
					   visible4: false});
	}
	utstilling4(){
		this.setState({visible1: false,
					   visible2: false,
					   visible3: false,
					   visible4: true});
	}
	
	
	render(){

		return (
		<div>
		<input type="button" value="Utstilling 1" onClick={() => this.utstilling1()}/>
		<input type="button" value="Utstilling 2" onClick={() => this.utstilling2()}/>
		<input type="button" value="Utstilling 3" onClick={() => this.utstilling3()}/>
		<input type="button" value="Utstilling 4" onClick={() => this.utstilling4()}/>
		<Tekst visible1={this.state.visible1} visible2={this.state.visible2} visible3={this.state.visible3} visible4={this.state.visible4} finished={this.state.finished}
		kategori1="Reklame" kategori2="Visdomsord" kategori3="Krigsrop"/>
		</div>
		)
	}
}

export default Utstilling;