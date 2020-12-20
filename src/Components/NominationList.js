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
        <div>
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