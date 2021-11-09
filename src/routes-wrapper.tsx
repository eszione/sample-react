import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const RouterWrapper = () => {
    return useRoutes(routes);
};

export default RouterWrapper;