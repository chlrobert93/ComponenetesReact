import React from 'react';

//Props recibe los datos
//Tiene todala información que se pasó del padre
const CommentDetails = props => {

    return (
          
        <div className="comment">
        <a href="/" className="avatar">
            <img alt ="avatar" src={props.avatar}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
            {props.author}
            </a>
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.comenText}</div>
        </div>
    </div>


    );
};

//Esta linea hace que nuestro componente estédiponible para el resto de nuestro proyecto
export default   CommentDetails;