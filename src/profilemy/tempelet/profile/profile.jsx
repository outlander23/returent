import React,{Component} from 'react';

import Listgroup from "./listgroup";




class Profile extends Component{
	state={
	
     user:
    {"id": "o~MKQ",
    "username": "S.M.MILOY",
    "name": null,
    "email": null,
    "cf_handle": "MILOY",
    "uri_id": "not_added",
    "batch": 12,
    "solve": 571,
    "accepted": 782,
    "wrong": 966,
    "limit": 142,
    "error": 148,
    "other": 2,
    "user": null
	}
     
	}
	
	render(){
	const{ username,cf_handle,solve,accepted,wrong,limit,error,uri_id,batch}=this.state.user;
	return (
	<div className="container m-4">
	<div className="container m-4">
	<div className="row">
	 
		<ul class="list-group container m-4 text-center">
			<li class="list-group-item bg-primary">Profile</li>
  			<table className="table table-bordered table-hover">
  				<Listgroup thead="User Name" td={username} />
  				<Listgroup thead="Total Solve" td={solve} />
  				<Listgroup thead="CF Handle" td={cf_handle} />
  				<Listgroup thead="Worng Ans" td={wrong} />
  				<Listgroup thead="Batch" td={batch} />
  				<Listgroup thead="Time Limit" td={limit} />
  				<Listgroup thead="Error" td={error} />
  				<Listgroup thead="URI Id" td={uri_id} />
  				
  			</table>
		</ul>

	

	</div>
	</div>
	</div>
	
	);
	}
}
export default Profile;
