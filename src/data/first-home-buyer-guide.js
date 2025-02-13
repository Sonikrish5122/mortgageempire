import {
    BanknotesIcon,
    BuildingOfficeIcon,
    ClipboardDocumentCheckIcon,
    CurrencyDollarIcon,
    DocumentTextIcon,
    HomeIcon,
    ShieldCheckIcon,
    TruckIcon,
} from "@heroicons/react/24/solid";

const FirstHomeBuyerGuide = [
    {
        title: "Stamp Duty",
        description:
            "This is the biggest cost. First Home Buyers may be exempt under certain property price thresholds. Rates vary by state. Check our Stamp Duty Calculator for an estimate.",
        icon: CurrencyDollarIcon,
        color: "blue",
    },
    {
        title: "Legal/Conveyancing Fees",
        description:
            "Typically between $1,000 – $1,500, covering all legal requirements like title searches.",
        icon: DocumentTextIcon,
        color: "deep-orange",
    },
    {
        title: "Building Inspection",
        description:
            "A necessary check before purchase, ensuring no major structural issues. Costs up to $1,000.",
        icon: BuildingOfficeIcon,
        color: "green",
    },
    {
        title: "Pest Inspection",
        description:
            "Conducted before purchase to check for pests like termites. Costs up to $500.",
        icon: ClipboardDocumentCheckIcon,
        color: "teal",
    },
    {
        title: "Lender Costs",
        description:
            "Most lenders charge fees for valuation and admin, typically $600 to $800.",
        icon: BanknotesIcon,
        color: "indigo",
    },
    {
        title: "Moving Costs",
        description: "Don’t forget to budget for a removalist if needed.",
        icon: TruckIcon,
        color: "red",
    },
    {
        title: "Mortgage Insurance Costs",
        description:
            "If borrowing over 80% of the property's value, you may need to pay Lender Mortgage Insurance.",
        icon: ShieldCheckIcon,
        color: "purple",
    },
    {
        title: "Ongoing Costs",
        description:
            "Budget for council rates, water rates, loan repayments, and home insurance.",
        icon: HomeIcon,
        color: "yellow",
    },
];

export default FirstHomeBuyerGuide;
