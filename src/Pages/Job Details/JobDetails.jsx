import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { IoLocationOutline, IoBriefcaseOutline, IoMailOutline } from 'react-icons/io5';

const JobDetails = () => {
    const { title, location, jobType, category, applicationDeadline, salaryRange, description, requirements, responsibilities, status, hr_email, hr_name, company_logo, company, _id } = useLoaderData();

    return (
        <div className="min-h-screen py-10 px-4 lg:px-10">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img src={company_logo} alt={company} className="w-20 h-20 rounded-xl object-contain border p-2 bg-gray-50" />
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{title}</h1>
                        <p className="text-gray-600 flex items-center gap-2 text-sm">
                            <IoLocationOutline /> {location}
                        </p>
                        <p className="text-sm text-blue-500 mt-1">{company}</p>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="text-right">
                    <Link to={`/jobApply/${_id}`}>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                            Apply Now
                        </button>
                    </Link>
                </div>

                {/* Job Summary */}
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                        <p className="font-medium text-gray-700">Job Type</p>
                        <p>{jobType}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Category</p>
                        <p>{category}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Application Deadline</p>
                        <p>{applicationDeadline}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Salary Range</p>
                        <p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700">Status</p>
                        <p className={`font-semibold ${status === 'active' ? 'text-green-600' : 'text-red-500'}`}>{status}</p>
                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Job Description</h2>
                    <p className="text-gray-700">{description}</p>
                </div>

                {/* Requirements */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Requirements</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {requirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Responsibilities */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* HR Contact */}
                <div className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 border border-gray-200">
                    <div className="text-2xl text-blue-600">
                        <IoMailOutline />
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{hr_name}</p>
                        <p className="text-sm text-gray-600">{hr_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;