import React from 'react';
import ReactDOM from 'react-dom';
import faker  from 'faker';
import CommentDetails from './CommentDetails';

//Crear componente
const App = () => {
    return (
        <div className="ui  container comments">
           <CommentDetails/>
           <CommentDetails/>
           <CommentDetails/>
           <CommentDetails/>
           <CommentDetails/>
           <CommentDetails/>

        </div>
    );
};

if (module.hot) {
    module.hot.accept();
  }

ReactDOM.render(<App />, document.querySelector('#root'));