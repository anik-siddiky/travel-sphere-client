import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import Loading from '../Shared/Loading';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationPromise } from '../../API/applicationsAPI';

const MyApplications = () => {

    const { user } = UseAuth();

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<Loading></Loading>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;