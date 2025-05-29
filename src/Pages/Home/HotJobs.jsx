import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobs }) => {
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold mb-7">Hot Jobs of the Day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;