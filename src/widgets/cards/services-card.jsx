import PropTypes from "prop-types";
import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function ServiceCard({ image, color, icon, title, description, features, cardClassName }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
        >
            <Card
                className={`rounded-lg shadow-lg shadow-gray-500/10 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${cardClassName}`}
            >
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-500 opacity-90 hover:opacity-100"
                    />
                )}
                <CardBody className="px-8 text-center animate-fadeIn">
                    <IconButton
                        variant="gradient"
                        size="lg"
                        color={color}
                        className="pointer-events-none mb-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-opacity-50 hover:ring-blue-400"
                    >
                        {icon}
                    </IconButton>
                    <Typography variant="h5" className="mb-2 text-xl font-semibold text-blue-gray-800">
                        {title}
                    </Typography>
                    <ul className="text-left text-blue-gray-600 space-y-2">
                        {features.split('.').map((line, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <span className="text-green-500 font-bold text-lg transition-transform duration-200 hover:scale-125">✔</span> {line}
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </motion.div>
    );
}

ServiceCard.defaultProps = {
    color: "blue",
    features: [],
};

ServiceCard.propTypes = {
    image: PropTypes.string,
    color: PropTypes.oneOf([
        "blue-gray", "gray", "brown", "deep-orange", "orange", "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red",
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceCard;
