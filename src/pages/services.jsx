import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { CoreService } from "@/data";
import { ServiceCard } from "@/widgets/cards";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

export function Services() {
    return (
        <>
            <motion.div 
                className="relative flex h-screen content-center items-center justify-center pt-16 pb-32"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <motion.div 
                        className="flex flex-wrap items-center" 
                        variants={staggerContainer} 
                        initial="hidden" 
                        animate="visible"
                    >
                        <div className="mx-auto w-full px-4 text-start lg:w-8/12">
                            <motion.div variants={fadeIn}>
                                <Typography variant="h1" color="white" className="mb-6 font-black text-center">
                                    WHAT WE OFFER
                                </Typography>
                            </motion.div>
                            <motion.div variants={fadeIn}>
                                <Typography variant="lead" color="white" className="text-2xl font-black mb-4">
                                    ✨ Our Core Service
                                </Typography>
                            </motion.div>
                            <motion.div variants={fadeIn}>
                                <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                    At Mortgage Empire, we are dedicated to providing exceptional services tailored to meet your unique needs.
                                </Typography>
                            </motion.div>
                            <motion.div variants={fadeIn}>
                                <Typography variant="lead" color="white" className="text-2xl font-black mb-4">
                                    🌟 Experiences That Matter
                                </Typography>
                            </motion.div>
                            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                                {[ 
                                    { title: "🎯 Customized Solutions", description: "We tailor our services to fit your specific requirements, ensuring optimal results." },
                                    { title: "👩‍💻 Expert Team", description: "Our professionals bring years of expertise and a passion for excellence to every project." },
                                    { title: "🚀 Innovative Approach", description: "We leverage the latest tools and technologies to stay ahead of the curve." },
                                    { title: "✅ Commitment to Quality", description: "From start to finish, we prioritize delivering top-notch results that exceed expectations." }
                                ].map(({ title, description }, index) => (
                                    <motion.p key={index} className="py-2 cursor-default transition-all text-white text-xl duration-300 ease-in-out hover:text-yellow-400" variants={fadeIn}>
                                        <span className="font-medium">{title} : {description}</span> 
                                    </motion.p>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            
            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <motion.div 
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" 
                        variants={staggerContainer} 
                        initial="hidden" 
                        animate="visible"
                    >
                        {CoreService.map(({ image, color, title, icon: Icon, features }) => (
                            <motion.div key={title} variants={fadeIn} whileHover={{ scale: 1.05 }}>
                                <ServiceCard
                                    image={image}
                                    color={color}
                                    title={title}
                                    icon={<Icon className="w-6 h-6 text-white" />}
                                    features={features}
                                    cardClassName="shadow-gray-500"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default Services;