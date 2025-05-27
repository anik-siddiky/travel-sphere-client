import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Lottie from 'lottie-react';
import registerLottie from '../../assets/Lotties/register.json';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center justify-center px-6 py-12">
            <div className="grid lg:grid-cols-2 items-center gap-12 max-w-6xl w-full">
                <div className="hidden lg:flex justify-center">
                    <Lottie animationData={registerLottie} loop style={{ width: '100%', maxWidth: '400px' }} />
                </div>
                <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create your account</h2>
                    
                    <form onSubmit={handleRegister} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
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
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition duration-300 font-medium"
                        >
                            Register
                        </button>
                    </form>

                    

                    <SocialLogin />

                    <p className="mt-6 text-sm text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-blue-600 font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
