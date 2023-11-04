import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import AppStore from "./utils/AppStore";
import "./app.css";

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
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}
export default App;
