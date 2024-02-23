const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/",
    element: Test(),
  },
]);

export default router;
