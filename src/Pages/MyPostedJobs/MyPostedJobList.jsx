import React, { use } from 'react';
import { Link } from 'react-router';

const MyPostedJobList = ({ jobsCreatedByPromise }) => {
    const jobs = use(jobsCreatedByPromise);
    return (
        <div className='my-20'>
            <h2 className="text-4xl">Jobs created by you: {jobs.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobs.map((job, index) => <tr key={job._id} className="hover:bg-base-300">
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td><Link to={`/applications/${job._id}`}>View Application</Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobList;