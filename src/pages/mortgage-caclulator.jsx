"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody, Input, Typography, Slider } from "@material-tailwind/react";
import { PieChart, Pie, Cell } from "recharts";
import { Footer } from "@/widgets/layout";

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(10);
    const [loanDuration, setLoanDuration] = useState(15);

    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanDuration * 12;
    const emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayable = emi * totalMonths;
    const interestComponent = totalPayable - loanAmount;

    const data = [
        { name: "Principal", value: loanAmount },
        { name: "Interest", value: interestComponent },
    ];
    const COLORS = ["#4ade80", "#cbd5e1"];

    return (
        <>
            <div className="relative flex h-full content-center items-center justify-center pt-[100px] xl:pt-20 2xl:pt-60 2xl:pb-[190px] pb-32">
                <div className="absolute inset-0 bg-[url('/img/background-3.png')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-black/60" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="mx-auto w-full flex justify-center gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="relative z-10 max-w-6xl w-full"
                            >
                                <div className="text-center mb-6">
                                    <Typography variant="h2" color="white" className="font-black text-5xl mb-5">
                                        Mortgage Calculator
                                    </Typography>
                                    <motion.div
                                        initial={{ opacity: 0, y: -30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    >
                                        <Typography variant="lead" color="white" className="opacity-80 mb-4">
                                            Plan your loan with easy calculations.
                                        </Typography>
                                    </motion.div>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Card className="shadow-lg bg-white p-6 rounded-lg">
                                        <CardBody>
                                            <Typography variant="h5" className="mb-4 font-semibold text-gray-800 text-center md:text-left">
                                                Enter Loan Details
                                            </Typography>
                                            <div className="space-y-5">
                                                <div>
                                                    <Typography variant="small" className="font-medium text-gray-700">
                                                        Loan Amount (₹)
                                                    </Typography>
                                                    <Input
                                                        type="number"
                                                        min="1000"
                                                        placeholder="Enter amount"
                                                        value={loanAmount}
                                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                                        className="custom-input"
                                                        labelProps={{ className: "custom-label" }}
                                                    />
                                                </div>

                                                <div>
                                                    <Typography variant="small" className="font-medium text-gray-700">
                                                        Interest Rate (% P.A)
                                                    </Typography>
                                                    <div className="flex items-center gap-4 flex-col xl:flex-row mt-3 xl:mt-0">
                                                        <Slider
                                                            defaultValue={50}
                                                            value={(interestRate - 1) * (100 / 19)}
                                                            min={0}
                                                            max={100}
                                                            step={(100 / 19)}
                                                            onChange={(e) => setInterestRate((e.target.value / (100 / 19)) + 1)}
                                                            className="w-full"
                                                        />
                                                        <Input
                                                            type="number"
                                                            value={interestRate}
                                                            readOnly
                                                            className="custom-input w-16 text-center border-gray-300"
                                                            labelProps={{ className: "custom-label" }}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <Typography variant="small" className="font-medium text-gray-700">
                                                        Loan Duration (Years)
                                                    </Typography>
                                                    <div className="flex items-center gap-4 flex-col xl:flex-row mt-3 xl:mt-0">
                                                        <Slider
                                                            defaultValue={50}
                                                            value={(loanDuration - 1) * (100 / 29)}
                                                            min={0}
                                                            max={100}
                                                            step={100 / 29}
                                                            onChange={(e) => setLoanDuration(Math.round(e.target.value / (100 / 29)) + 1)}
                                                            className="w-full"
                                                        />
                                                        <Input type="number" value={loanDuration} readOnly
                                                            className="custom-input w-16 text-center border-gray-300"
                                                            labelProps={{ className: "custom-label" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className="shadow-lg bg-white p-6 rounded-lg">
                                        <CardBody className="flex flex-col items-center">
                                            <PieChart width={250} height={180}>
                                                <Pie data={data} innerRadius={50} outerRadius={70} startAngle={180} endAngle={0} dataKey="value">
                                                    {data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                                    ))}
                                                </Pie>
                                            </PieChart>
                                            <div className="flex gap-4 text-sm mt-2">
                                                <div className="flex items-center gap-1">
                                                    <span className="w-3 h-3 bg-green-500 inline-block rounded-full"></span>
                                                    <span className="text-gray-700">Principal</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="w-3 h-3 bg-red-400 inline-block rounded-full"></span>
                                                    <span className="text-gray-700">Interest</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 w-full">
                                                <Typography variant="small" className="flex justify-between text-gray-800">
                                                    Monthly EMI <span className="font-medium">₹{emi.toFixed(0)}</span>
                                                </Typography>
                                                <Typography variant="small" className="flex justify-between text-gray-800">
                                                    Total Payable <span className="font-medium">₹{totalPayable.toFixed(0)}</span>
                                                </Typography>
                                                <Typography variant="small" className="flex justify-between text-gray-800">
                                                    Interest Component <span className="font-medium">₹{interestComponent.toFixed(0)}</span>
                                                </Typography>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </>
    );
};

export default MortgageCalculator;
