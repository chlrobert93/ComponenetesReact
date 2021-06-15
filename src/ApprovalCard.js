import React from 'react';

const ApprovalCard  = () => {

    return (
       <div className="ui card">
           <div className="content">Are you sure?</div>
           <div className="extra content">
               <div className="ui two buttons">
                   <div className="ui basic green button">Approve</div>
                   <div className="ui basic red button">React</div>
               </div>
           </div>
       </div>
    );

};

//export para poder utilizar este componente en otras ubicacionesdentro de nuestro proyecto
export default ApprovalCard;