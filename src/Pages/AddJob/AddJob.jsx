import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const { user } = UseAuth();
    const handleSubmit = (e) => {



        e.preventDefault();
        const form = e.target;

        const jobData = {
            title: form.title.value,
            location: form.location.value,
            jobType: form.jobType.value,
            category: form.category.value,
            applicationDeadline: form.applicationDeadline.value,
            salaryRange: {
                min: form.salaryMin.value,
                max: form.salaryMax.value,
                currency: form.currency.value,
            },
            description: form.description.value,
            company: form.company.value,
            company_logo: form.companyLogo.value,
            requirements: form.requirements.value.split(',').map(r => r.trim()),
            responsibilities: form.responsibilities.value.split(',').map(r => r.trim()),
            hr_email: form.hrEmail.value,
            hr_name: form.hrName.value,
            status: form.status.value,
        };

        axios.post('http://localhost:5000/jobs', jobData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your new job has been saved and published",
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
        <div className="min-h-[calc(100vh-200px)] py-12 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">
                <h2 className="text-4xl font-bold text-center mb-8 text-primary">Post a New Job</h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormInput label="Job Title" name="title" />
                        <FormInput label="Location" name="location" />
                        <FormSelect label="Job Type" name="jobType" options={['Remote', 'On-site', 'Hybrid']} />
                        <FormInput label="Category" name="category" />
                        <FormInput label="Application Deadline" name="applicationDeadline" type="date" />
                        <FormInput label="Company Name" name="company" />
                        <FormInput label="Company Logo URL" name="companyLogo" />
                        <FormInput label="Currency" name="currency" />
                    </div>

                    <div>
                        <label className="label font-medium text-gray-700">Salary Range</label>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="number" name="salaryMin" placeholder="Min" className="input input-bordered w-full" required />
                            <input type="number" name="salaryMax" placeholder="Max" className="input input-bordered w-full" required />
                        </div>
                    </div>

                    <FormTextarea label="Job Description" name="description" rows={5} />
                    <FormTextarea label="Requirements (comma separated)" name="requirements" rows={3} />
                    <FormTextarea label="Responsibilities (comma separated)" name="responsibilities" rows={3} />

                    <div className="grid md:grid-cols-2 gap-6 items-center">
                        <FormInput label="HR Name" name="hrName" />
                        <input type="email" name="hrEmail" disabled defaultValue={user?.email} className='input input-bordered w-full' />
                    </div>

                    <FormSelect label="Status" name="status" options={['Active', 'Closed']} />

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-wide text-lg">Submit Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const FormInput = ({ label, name, type = 'text' }) => (
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text font-medium">{label}</span>
        </label>
        <input type={type} name={name} required className="input input-bordered w-full" />
    </div>
);

const FormSelect = ({ label, name, options }) => (
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text font-medium">{label}</span>
        </label>
        <select name={name} required className="select select-bordered w-full">
            <option value="">Select</option>
            {options.map((opt) => (
                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
            ))}
        </select>
    </div>
);

const FormTextarea = ({ label, name, rows = 4 }) => (
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text font-medium">{label}</span>
        </label>
        <textarea name={name} required rows={rows} className="textarea textarea-bordered resize-none w-full" />
    </div>
);

export default AddJob;
