import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this? 
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" text="Nice blog post!" timeAgo="Today at 6:00PM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Adam" text="Good" timeAgo="Yesterday at 7:00PM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Amen" text="It is interesting!" timeAgo="Today at 8:00PM" avatarImage={faker.image.avatar()} />
            </ApprovalCard>
        </div>        
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));