

import React from 'react';

const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <span className="fa fa-spinner fa-5x fa-fw fa-pulse text-primary"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;