const { heroui } = require("@heroui/react");

module.exports = {
    ...require('@repo/tailwind-config/tailwind.config.cjs'),
    plugins: [heroui()],
};
