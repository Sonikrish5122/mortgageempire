import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function TeamCard({ img, name, position, socials }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col h-full"
    >
      <Card color="transparent" shadow={false} className="text-center">
        <Avatar
          src={img}
          alt={name}
          size="xxl"
          variant="rounded"
          className="h-[250px] w-full shadow-lg shadow-gray-500/25"
        />
        <Typography variant="h5" color="blue-gray" className="mt-6 mb-1">
          {name}
        </Typography>
        {position && (
          <Typography className="font-bold text-blue-gray-500">
            {position}
          </Typography>
        )}
        {socials && <div className="mx-auto mt-5">{socials}</div>}
      </Card>
    </motion.div>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
