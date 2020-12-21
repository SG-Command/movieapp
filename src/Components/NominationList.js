//-----------------------------------------------------------------------------------------
// IMPORT STATEMENTS
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';

//-----------------------------------------------------------------------------------------
// COMPONENT
//-----------------------------------------------------------------------------------------
class NominationList extends Component {
 
    render(){
        return (
        <div className="nominationContainer">
            <h2 className="nominationHeader">Nominations</h2>
            {this.props.data.nominations.map((nomination) => {
                return(
                    <div>
                        <div className = "nomination" key={nomination}>{nomination}</div>
                        <img src="https://github.com/SG-Command/movieapp/blob/master/src/Images/delete-white-24dp.svg?raw=true/"/>
                    </div>

                )     
            })}
        </div>
    )
  }
}

export default NominationList;