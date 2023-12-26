
import { Outlet } from "react-router-dom";

const PublicRoutes = ({ component: Component, ...rest }) => {
        return <Outlet/>
}

export default PublicRoutes;
