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
                    <div key={nomination}>{nomination}</div>
                )     
            })}
        </div>
    )
  }
}

export default NominationList;