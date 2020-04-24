import React from 'react';
import PageNavbar from './PageNavbar';


export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		// State maintained by this React component is the selected movie name,
		// and the list of recommended movies.
	}

	
	render() {
		return (
			<div className="Dashboard">
				<PageNavbar active="dashboard" />
			    <div className="container dashboard-container">
			    	<div className="jumbotron">
			    		<div className="h5">My Profile</div>
			    		<br></br>
			    		<div className="header-container">
			    			<div className="h6">Your Basic Info</div>
			    			<div className="headers">
			    				<div className="header"><strong>Name</strong></div>
			    				<div className="header"><strong>Birth</strong></div>
					            <div className="header"><strong>Fun Fact</strong></div>
			    			</div>
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	}
}