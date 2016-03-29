
var React = require('react');
var ReactDOM = require('react-dom');


var Comment = React.createClass({
	render: function() {
		return (
			<div className="formBox">
				<h1>Comments</h1>
				<Form/>
			</div>
			);
	}
});


var Form = React.createClass({	
	getInitialState: function() {
		return {
			text: ''
		};
	},
	handleTextChange: function(e){
		this.setState({
			text: e.target.value
		});
		document.getElementById('left').innerHTML = this.state.text;
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.setState({text: ''});
	},
	render: function() {
		return (
		<form id="Form" onSubmit={this.handleSubmit}>
		<input
		type="text"
		placeholder="Say something..."
		value={this.state.text}
		onChange={this.handleTextChange}
		/>
		<input type="submit" value="Post" />
		</form>
		);
	}
});

ReactDOM.render(
 <Comment/>,
  document.getElementById('middle')
);