
import React from 'react';

import '../Styles/Job.css';

const Job = ({description, title, date, location}) => (
    <div >
    {title}
    {date}
    {location}
       {description} 
    </div>
);

export default Job;