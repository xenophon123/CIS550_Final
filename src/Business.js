import React from 'react';
import PageNavbar from './PageNavbar';
import './Business.css';


export default class Business extends React.Component {
	constructor(props) {
		super(props);

		// State maintained by this React component is the selected movie name,
		// and the list of recommended movies.
		this.state = {
			businessName: "",
			businessInfo: []
		}

		this.handleBusinessNameChange = this.handleBusinessNameChange.bind(this);
		this.submitBusiness = this.submitBusiness.bind(this);
	}

	handleBusinessNameChange(e) {
		this.setState({
			businessName: e.target.value
		});
	}

	submitBusiness() {
	  fetch("http://localhost:3001/business/" + this.state.businessName,
      {
        method: "GET"
      }).then(res => {
        return res.json();
      }, err => {
        console.log(err);
      }).then(busList => {
      	const busDivs = busList.map((busObj, i) =>
      		<div className="businessResults">
              <div className="name">{busObj.name}</div>
              <div className="address">{busObj.address}</div>
              <div className="city">{busObj.city}</div>
              <div className="state">{busObj.state}</div>
              <div className="stars">{busObj.stars}</div>
            </div>

      	);

        this.setState({
          businessInfo: busDivs
        });
      });
	}

	//name, address, city, state, postal_code, stars

	
	render() {

		return (
			<div className="Business">
				<PageNavbar active="business" />

			    <div className="container business-container">
			    	<div className="jumbotron">
			    		<div className="h5">Business</div>
			    		<br></br>
			    		<div className="input-container">
			    			<input type='text' placeholder="Enter Business Name" value={this.state.businessName} onChange={this.handleBusinessNameChange} id="businessName" className="movie-input"/>
			    			<button id="submitMovieBtn" className="submit-btn" onClick={this.submitBusiness}>Submit</button>
			    		</div>
			    		<div className="header-container">
			    			<div className="h6">Business information is listed below...</div>
			    			<div className="headers">
			    				<div className="header"><strong>Name</strong></div>
			    				<div className="header"><strong>Address</strong></div>
			    				<div className="header"><strong>City</strong></div>
					            <div className="header"><strong>State</strong></div>
					            <div className="header"><strong>Stars</strong></div>
			    			</div>
			    		</div>
			    		<div className="results-container" id="results">
			    			{this.state.businessInfo}
			    		</div>
			    	</div>
			    </div>
		    </div>
		);
	}
}