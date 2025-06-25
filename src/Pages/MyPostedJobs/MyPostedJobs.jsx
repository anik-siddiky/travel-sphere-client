import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import MyPostedJobList from './MyPostedJobList';
import { jobsCreatedByPromise } from '../../API/jobsAPI';

const MyPostedJobs = () => {

    const { user } = UseAuth();

    return (
        <div>
            <Suspense>
                <MyPostedJobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;