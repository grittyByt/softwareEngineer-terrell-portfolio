import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
    const env = loadEnv(
        mode,
        process.cwd(),
        "BACKEND_"
    );

    // if (!env.BACKEND_URL) {
    //     throw new Error("BACKEND_URL is missing from .env");
    // }

    return {

        // GitHub Pages repository path

        base: "/softwareEngineer-terrell-portfolio/",

        // this points vite to look at the frontend directory
        root: "frontend",

        // this will allow the browser to request "/api/weather/atlanta"
        // without knowing where Express lives.
        server: {
            proxy: {
                "/api": {
                    target: env.BACKEND_URL || "http://localhost:3000",
                    changeOrigin: true,
                },
            },
        },
    };
});