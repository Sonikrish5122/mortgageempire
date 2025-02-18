import { BanknotesIcon, CalculatorIcon, CalendarIcon, DocumentTextIcon, HomeIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";


export const CoreService = [
    {
        color: "blue",
        title: "Purchase New House",
        icon: HomeIcon , 
        image: "/img/purchase-new-house.jpg",
        features: `
            Guidance on finding the ideal home for you.
            Assistance with mortgage pre-approval.
            Transparent pricing and cost breakdown.
            Personalized home search based on your needs.
            Expert advice through the closing process
        `,
    },
    {
        color: "green",
        title: "Respect for all people",
        icon: DocumentTextIcon,
        image: "/img/apply-for-loan.jpg",
        features: `
            Commitment to treating everyone with dignity.
            Creating an inclusive and supportive environment.
            Upholding strong ethical values in business practices.
            Fostering collaboration and mutual respect in every interaction
        `,
    },
    {
        color: "red",
        title: "Refinancing Your Home",
        icon: CalculatorIcon ,
        image: "/img/refinancing-your-home.jpg",
        features: `
            Lower your monthly mortgage payments with a better rate.
            Access cash from home equity for other investments.
            Consolidate high-interest debt into a manageable mortgage.
            Explore fixed-rate or adjustable-rate mortgage options
        `,
    },
    {
        color: "yellow",
        title: "Capital Management",
        icon: CalendarIcon ,
        image: "/img/capital-management.jpg",
        features: `
            Strategic advice to grow and protect your capital.
            Diversification of investments to reduce risk.
            Customized plans for personal and business wealth.
            Continuous tracking and adjusting of financial strategies
        `,
    },
    {
        color: "orange",
        title: "Renovation House",
        icon: BanknotesIcon ,
        image: "/img/renovation-house.jpg",
        features: `
            Budget-friendly renovation plans to increase home value.
            Expertise in home improvement that fits your needs.
            Access to reliable contractors and suppliers.
            Project management to ensure timely and quality results
        `,
    },
    {
        color: "teal",
        title: "Refinance Advisor",
        icon: QuestionMarkCircleIcon ,
        image: "/img/refinance-advisor.jpg",
        features: `
            In-depth analysis of your current mortgage terms.
            Recommendations for better refinancing options.
            Help with comparing rates from multiple lenders.
            Simplified process for a smooth refinance experience
        `,
    },
];

export default CoreService;
