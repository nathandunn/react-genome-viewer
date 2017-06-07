import React, {Component} from 'react';

class GenomeViewer extends Component {
	render() {

		return (
			React.createElement('div', null,
				React.createElement('svg', {
						version: '1.1', id: 'lion', x: '0px', y: '0px',
						viewBox: '0 0 800 800', 'enable-background': 'new 0 0 800 800'
					},
					React.createElement('circle', { cx:50,cy:50,r:50, fill:'red',stroke:'black',strokWidth:'3' },null ),
					React.createElement('circle', { cx:150,cy:50,r:50, fill:'red',stroke:'black',strokWidth:'3' },null )
				)
			)
		);
	}
}

export default GenomeViewer;
