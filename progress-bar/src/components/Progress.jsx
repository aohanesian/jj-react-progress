import React from 'react';

function Progress(props) {
    console.log(props);
    return (
        <React.Fragment>
            Результат:
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="progressbar"
                    style={{ width: `${props.percentage}%` }}
                />
            </div>
        </React.Fragment>
    );
}

export default Progress;