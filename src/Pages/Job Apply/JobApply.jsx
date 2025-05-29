import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = UseAuth();

    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume
        }

        axios.post('http://localhost:5000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your application has been submitted!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-10 space-y-6">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-800 mb-1">
                        Job Application
                    </h3>
                    <p className="text-sm text-gray-500">
                        Apply for the job – view <Link to={`/jobs/${jobId}`} className="text-blue-600 underline hover:text-blue-800">job details</Link>
                    </p>
                </div>

                <form onSubmit={handleApplyFormSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-gray-400 text-xs">(auto-filled)</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email || ''}
                            disabled
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            <FaLinkedin className="inline mr-1 text-blue-600" />
                            LinkedIn Profile <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            name="linkedin"
                            required
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            <FaGithub className="inline mr-1 text-gray-800" />
                            GitHub Profile <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            name="github"
                            required
                            placeholder="https://github.com/yourusername"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            <FaFileAlt className="inline mr-1 text-green-600" />
                            Resume Link <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="url"
                            name="resume"
                            required
                            placeholder="https://your-resume-link.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApply;