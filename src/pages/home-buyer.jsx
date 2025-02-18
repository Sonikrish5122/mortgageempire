import React from "react";
import { motion } from "framer-motion";
import {
    Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import FirstHomeBuyerGuide from "@/data/first-home-buyer-guide";

export function HomeBuyer() {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="mx-auto w-full px-4 text-center lg:w-8/12">
                            <motion.div 
                                initial={{ opacity: 0, y: -50 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1 }}
                            >
                                <Typography variant="h1" color="white" className="mb-6 font-black">
                                    Becoming a First Home Buyer
                                </Typography>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -30 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1, delay: 0.3 }}
                            >
                                <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                    Buying your first home is an exciting step, but it comes with many questions.
                                    We’re here to help with expert guidance, loan comparisons, and tailored solutions.
                                </Typography>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -30 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                    That’s where we can help. We’ll do the legwork for you, comparing home loans across a
                                    variety of products available from Australia’s leading lending institutions.
                                </Typography>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: -30 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 1, delay: 0.7 }}
                            >
                                <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                    As a first home buyer, you may be eligible for a First Home Buyer Grant. This grant may be
                                    available to Australian citizens or permanent residents who wish to buy or build their
                                    first home, which will be their principal place of residence within 12 months of settlement.
                                    Since grant conditions vary by state, contact us to learn about eligibility requirements
                                    and how much grant money you could receive.
                                </Typography>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="-mt-32 bg-white px-4 pb-20 pt-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {FirstHomeBuyerGuide.map(({ color, title, icon, description }) => (
                            <motion.div 
                                key={title} 
                                initial={{ opacity: 0, y: 50 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8 }}
                            >
                                <FeatureCard
                                    color={color}
                                    title={title}
                                    icon={React.createElement(icon, {
                                        className: "w-5 h-5 text-white",
                                    })}
                                    description={description}
                                    cardClassName='shadow-gray-500'
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-32 bg-white px-6 pb-20 pt-6">
                <div className="text-center mb-12">
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h1" color="black" className="font-black text-3xl md:text-4xl">
                            A General First Home Buyer FAQ Guide
                        </Typography>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <Typography variant="lead" color="black" className="opacity-70 mt-2">
                            Understanding the key costs involved in purchasing your first home.
                        </Typography>
                    </motion.div>
                </div>
                <div className="max-w-7xl container mx-auto">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {FirstHomeBuyerGuide.map(({ color, title, icon, description }) => (
                            <motion.div 
                                key={title} 
                                initial={{ opacity: 0, y: 50 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                transition={{ duration: 0.8 }}
                            >
                                <FeatureCard
                                    color={color}
                                    title={title}
                                    icon={React.createElement(icon, {
                                        className: "w-5 h-5 text-white",
                                    })}
                                    description={description}
                                    cardClassName="shadow-gray-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
}

export default HomeBuyer;
