import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../layout/NotFound/NotFound";
import CastTab from "../features/movies/pages/MovieDetail/Tabs/CastTab.js";
import CrewTab from "../features/movies/pages/MovieDetail/Tabs/CrewTab.js";
import PeopleDetail from "../features/people/pages/PeopleDetail/PeopleDetail.js";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(
  () => import("../features/movies/pages/MovieDetail/MovieDetail")
);
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));
const Search = lazy(() => import("../features/search/pages/Search"));
const CompanyDetail = lazy(
  () => import("../features/company/pages/CompanyDetail/CompanyDetail.jsx")
);

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
          children: [
            {
              index: true,
              element: <CastTab />,
            },
            {
              path: "crew",
              element: <CrewTab />,
            },
          ],
        },
        {
          path: "bookmark",
          element: <Bookmark />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "company/:id",
          element: <CompanyDetail />,
        },
        {
          path: "people/:id",
          element: <PeopleDetail />,
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
