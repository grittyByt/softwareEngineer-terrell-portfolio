import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
    const env = loadEnv(
        mode,
        process.cwd(),
        "BACKEND_"
    );

    return {

        // GitHub Pages repository path

        base: "/softwareEngineer-terrell-portfolio/",

        // this points vite to look at the frontend directory
        root: "frontend",

        // Multi-page build configuration

        build: {

            rollupOptions: {

                input: {

                    main: resolve(__dirname, "frontend/index.html"),
                    degree: resolve(__dirname, "frontend/html/degree.html"),
                    about: resolve(__dirname, "frontend/html/about.html"),
                    // portfolio: resolve(__dirname, "frontend/html/portfolio.html"),
                    // hire: resolve(__dirname, "frontend/html/hire.html"),

                },

            },

        },

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