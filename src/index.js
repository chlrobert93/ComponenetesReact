import React from 'react';
import ReactDOM from 'react-dom';
import faker  from 'faker';
import CommentDetails from './CommentDetails';
import ApprovaCard from './ApprovalCard';


//Crear componente
const App = () => {
    return (
      <div className="ui  container comments">
       <ApprovaCard>
         <div>
           <h4>Warning!</h4>
           Are you sure you want to do this?
         </div>
       </ApprovaCard>



        <ApprovaCard>
            <CommentDetails
              src={faker.image.avatar()}
              author="Pepe"
              timeAgo="Today at 4:45PM"
              comenText="Nice blog post!"
              avatar={faker.image.avatar()}
            />
        </ApprovaCard>

        <ApprovaCard>
              <CommentDetails
                author="Juan"
                timeAgo="Today at 2:00AM"
                comenText="Nice blog post!"
                avatar={faker.image.avatar()}
              />
          </ApprovaCard>

          <ApprovaCard>
              <CommentDetails
                author="Tomas"
                timeAgo="Yesterday at 5:00PM"
                comenText="Nice blog post!"
                avatar={faker.image.avatar()}
              />
          </ApprovaCard>

          <ApprovaCard>
              <CommentDetails
                author="Peter"
                timeAgo="Yesterday at 6:30PM"
                comenText="Nice blog post!"
                avatar={faker.image.avatar()}
              />
          </ApprovaCard>
      </div>
    );
};

if (module.hot) {
    module.hot.accept();
  }

ReactDOM.render(<App />, document.querySelector('#root'));