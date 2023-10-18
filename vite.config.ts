import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ampcontrol-technical/",
  server: {
    proxy: {
      "/fuelApi": {
        target: "https://www.fueleconomy.gov/ws/rest/fuelprices",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fuelApi/, ""),
      },
      // "/vehicleIdApi": {
      //   target: "https://www.fueleconomy.gov/ws/rest/vehicle/menu/options",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/vehicleIdApi/, ""),
      // },
      // "/vehicleDetailApi": {
      //   target: "https://www.fueleconomy.gov/ws/rest/vehicle",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/vehicleDetailApi/, ""),
      // },
    },
  },
});
