var React = require('react');
var ReactDOM = require('react-dom');
var GenomeViewer = require('react-genome-viewer');

var App = React.createClass({
	render () {
		return (
			<div>
				<GenomeViewer />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
