import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../layout/NotFound/NotFound";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(() => import("../features/movies/pages/MovieDetail"));
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "movie/:id",
          element: <MovieDetail />,
        },
        {
          path: "bookmark",
          element: <Bookmark />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default memo(AppRoutes);
