import { defineCofig } from "vite";
import { resolve } from "vite";

export default defineCofig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                add: resolve(__dirname, "add.html"),
                about: resolve(__dirname, "about.html")
            }
        }
    }
});