import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, location, requirements, description, _id, salaryRange, company, company_logo } = job;

    return (
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="p-4 flex items-center gap-4 border-b border-gray-100">
                <img src={company_logo} alt={`${company} logo`} className="w-14 h-14 rounded-md object-contain" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
                    <p className="flex items-center text-sm text-gray-500">
                        <IoLocationOutline className="mr-1" /> {location}
                    </p>
                </div>
            </div>

            <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">NEW</span>
                </div>

                <p className="text-gray-600 text-sm">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>

                <p className="text-sm text-gray-500"><span className="font-medium text-gray-700">Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {requirements.map((skill, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="text-right pt-2">
                    <Link to={`/jobs/${_id}`}>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
