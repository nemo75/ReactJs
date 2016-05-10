'use strict'
var React = require('react');
var ReactDOM = require('react-dom');


var Message = React.createClass({
	render : function() {
		return (
			<div>{this.props.text}</div>
		);
	}
});

var Input = React.createClass({
	inputChange: function(e){
		this.props.onChange(e.target.value)
	},
	handleSubmit : function(e) {
		e.preventDefault();
		this.setState({text: ' '});
	},
	render : function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.inputChange} value={this.props.text}/>
				<button type="submit">Envoi la sauce</button> 
			</form>
		);
	}
});
var Drapeau = React.createClass({
	getInitialState: function(){
		return {text:''};
	},
	onChange : function (text) {
		this.setState({text})
	},
	render : function() {
		return (
		<div className="container">
			<div id="hello"></div>
			<div id="left"><Message text={this.state.text}/></div>
			<div id="middle"><Container onChange={this.onChange}/><Message text={this.state.text}/></div>
			<div id="right"></div>
		</div>
		);
	}
});

var Container = React.createClass({
	getInitialState: function(){
		return {text:''};
	},
	render : function() {
		return (
			<div className="box">
				<h3> Try it ! </h3>
				<Input value={this.state.text} onChange={this.props.onChange}/>
			</div>
		);
	}
});

// var MessageList = React.createClass({
// 	render : function() {
// 			var messageNodes = this.props.text.map(function(message) {
// 				return ( <Message text={message.text}> {message.text} </Message>);
// 			});
// 		return (
// 			 <div className="MessageList"> {messageNodes}</div> 
// 		);
// 	}
// });

ReactDOM.render(
	<Drapeau />,
	document.getElementById('big')
	);