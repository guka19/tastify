import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import RecipesPage from "./pages/RecipesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/recipes", element: <RecipesPage /> },
      { path: "/recipes/:id", element: <RecipePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/about", element: <AboutPage /> },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App