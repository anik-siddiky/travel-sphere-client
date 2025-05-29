import React from 'react';
import { motion } from 'motion/react';
import team1 from '../../assets/Team/celebrationInOffice.jpg';
import team2 from '../../assets/Team/developerTeam.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-t-[45px] rounded-br-[45px] border-s-8 border-b-8 border-blue-600 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 8, delay: 4, repeat: Infinity }}
                        className="max-w-sm rounded-t-[45px] rounded-br-[45px] border-s-8 border-b-8 border-blue-600 shadow-2xl"
                    />

                </div>
                <div className='flex-1'>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 60, damping: 10 }}
                        className="text-5xl font-extrabold text-gray-800"
                    >
                        Remote{" "}
                        <motion.span
                            animate={{
                                color: ['#6366F1', '#EC4899', '#14B8A6'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                            className="drop-shadow-lg"
                        >
                            Jobs
                        </motion.span>{" "}
                        For You!
                    </motion.h1>

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;