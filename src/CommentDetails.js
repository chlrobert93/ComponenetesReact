import React from 'react';
import faker from 'faker';

const commentDetail = () => {
    return (
          
        <div className="comment">
        <a href="/" className="avatar">
            <img alt ="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
            <a href="/" className="author">
                Sam
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00pm</span>
            </div>
            <div className="text">Nice blog post!</div>
        </div>
    </div>


    );
};

//Esta linea hace que nuestro componente estédiponible para el resto de nuestro proyecto
export default   commentDetail;