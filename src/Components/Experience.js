import React from 'react';
import '../Styles/Experience.css';
import Job from './Job';
import JobsList from '../Data/JobsList';

const jobs = JobsList.map(x => 
    <Job description={x.description} title={x.title} date={x.date} location={x.location}/>,
);
const Experience = () => (
    <div className="experience-main-container">
        <div className="experience-content-wrapper">
            <div>
                <span className="experience-my">My </span>
                <span className="experience-job">Job</span>
                
            </div>
            <div>
                I write code... Some good, some not.
            </div>
            <div>
                {jobs}
            </div>
        </div>
    </div>
);

export default Experience;