import { Outlet, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import AppStore from "./utils/AppStore";
import "./app.css";
import { Suspense, lazy } from "react";

const SearchResults = lazy(() => import("../src/components/SearchResults"));
const WatchVideo = lazy(() => import("../src/components/WatchVideo"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "search",
            element: (
              <Suspense>
                <SearchResults />
              </Suspense>
            ),
          },
          {
            path: "watch",
            element: (
              <Suspense>
                <WatchVideo />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={AppStore}>
      <Header />
      {/* Here Outlet Gives the Child */}
      <Outlet />
    </Provider>
  );
}
export default App;
