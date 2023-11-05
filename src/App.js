import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import AppStore from "./utils/AppStore";
import "./app.css";
import { Suspense, lazy } from "react";

const SearchResultsPage = lazy(() => import("../src/components/SearchResults"));

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
                <SearchResultsPage />
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
      <Body />
    </Provider>
  );
}
export default App;
