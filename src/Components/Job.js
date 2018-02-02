
import React from 'react';

import '../Styles/Job.css';

const Job = ({description, title, date, location}) => (
    <div className="job-content-container">
        <div>
            <div className="job-title-container">
                {title}
                <br />
                {location}
            </div>
            <div className="job-date-container">
                {date}
            </div>
        </div>
        <div className="clear-fix"></div>
       {description} 
    </div>
);

export default Job;