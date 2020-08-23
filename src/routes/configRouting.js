import Home from "../page/Home";
import User from "../page/User";
import Error404 from "../page/Error404";

export default [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "/:id",
    exact: true,
    page: User,
  },
  {
    path: "*",
    page: Error404,
  },
];
