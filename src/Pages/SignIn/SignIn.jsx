import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import signInLottie from '../../assets/Lotties/signIn.json';
import { Link } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4">
            <div className="grid lg:grid-cols-2 items-center gap-10 max-w-5xl w-full">
                <div className="hidden lg:flex justify-center">
                    <Lottie animationData={signInLottie} loop={true} style={{ width: '100%', maxWidth: '550px' }} />
                </div>
                <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login to your account</h1>
                    <form onSubmit={handleSignIn} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <a className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium"
                        >
                            Login
                        </button>
                    </form>
                    <SocialLogin></SocialLogin>

                    <p className="mt-6 text-sm text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link className='text-blue-600 underline' to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;