import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import { HOME_ROUTE, INFO_ROUTE } from "./utils/const";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: Home
    },
    {
        path: INFO_ROUTE,
        component: Info
    }
]