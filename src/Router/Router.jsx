import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import SignIn from '../Pages/SignIn/SignIn';
import JobDetails from '../Pages/Job Details/JobDetails';
import Loading from '../Pages/Shared/Loading';
import PrivateRoute from '../Routes/PrivateRoute';
import JobApply from '../Pages/Job Apply/JobApply';
import MyApplications from '../Pages/My Applications/MyApplications';
import AddJob from '../Pages/AddJob/AddJob';
import MyPostedJobs from '../Pages/MyPostedJobs/MyPostedJobs';
import ViewApplications from '../Pages/ViewApplications/ViewApplications';

const Router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/jobs/:id",
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/jobApply/:id",
                element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>
            },
            {
                path: 'myApplications',
                element: <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
            },
            {
                path: 'addJob',
                element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element: <PrivateRoute> <MyPostedJobs></MyPostedJobs> </PrivateRoute>
            },
            {
                path: 'applications/:job_id',
                element: <PrivateRoute> <ViewApplications></ViewApplications> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/applications/job/${params.job_id}`)
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/signin",
                Component: SignIn,
            }
        ]
    }
])

export default Router;