import React from 'react';

const ApprovalCard = props => {
    return  (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui 2 buttons">
                    <div className="ui approval button">Approve</div>
                    <div className="ui decline button">Decline</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;