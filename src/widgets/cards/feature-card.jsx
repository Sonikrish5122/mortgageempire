import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

export function FeatureCard({ color, icon, title, description, cardClassName }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full"
    >
      <Card className={`h-[250px] rounded-lg shadow-lg shadow-gray-500/10 ${cardClassName}`}>
        <CardBody className="px-8 text-center">
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className="pointer-events-none mb-6 rounded-full"
          >
            {icon}
          </IconButton>
          <Typography variant="h5" className="mb-2" color="blue-gray">
            {title}
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
