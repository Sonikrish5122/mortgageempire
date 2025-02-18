import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { CoreService } from "@/data";
import { ServiceCard } from "@/widgets/cards";

export function Services() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="mx-auto w-full px-4 text-start lg:w-8/12">
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Typography variant="h1" color="white" className="mb-6 font-black text-center">
                                    WHAT WE OFFER
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <Typography variant="lead" color="white" className="text-2xl font-black mb-4">
                                    ✨ Our Core Service
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                    At Mortgage Empire, we are dedicated to providing exceptional services tailored to meet your unique needs.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Typography variant="lead" color="white" className="text-2xl font-black mb-4">
                                    🌟 Experiences That Matter
                                </Typography>
                            </motion.div>
                            {[
                                { title: "🎯 Customized Solutions", description: "We tailor our services to fit your specific requirements, ensuring optimal results." },
                                { title: "👩‍💻 Expert Team", description: "Our professionals bring years of expertise and a passion for excellence to every project." },
                                { title: "🚀 Innovative Approach", description: "We leverage the latest tools and technologies to stay ahead of the curve." },
                                { title: "✅ Commitment to Quality", description: "From start to finish, we prioritize delivering top-notch results that exceed expectations." }
                            ].map(({ title, description }, index) => (
                                <motion.p
                                    key={index}
                                    className="py-2 cursor-default transition-all text-white text-xl duration-300 ease-in-out hover:text-yellow-400"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 * index }}
                                >
                                    <span className="font-medium">{title} : {description}</span>
                                </motion.p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {CoreService.map(({ image, color, title, icon: Icon, features }) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
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
