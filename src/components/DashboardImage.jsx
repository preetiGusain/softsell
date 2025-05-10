// src/components/DashboardImage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import dashboardImage from '../assets/dashboard.png';

const DashboardImage = () => {
  return (
    <div className="w-full flex justify-center py-12 px-4">
  <motion.div
    className="p-4 rounded-2xl bg-white shadow-xl"
    style={{
      boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)',
    }}
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{
      repeat: Infinity,
      duration: 4,
      ease: 'easeInOut',
    }}
  >
    <img
      src={dashboardImage}
      alt="Dashboard View"
      className="w-[80vw] max-w-5xl h-auto rounded-xl"
    />
  </motion.div>
</div>

  );
};

export default DashboardImage;
