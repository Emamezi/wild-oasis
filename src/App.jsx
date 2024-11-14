import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Cabins from "./pages/Cabins";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="account" element={<Account />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// const routes = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />,
//       },
//       {
//         path: "/bookings",
//         element: <Bookings />,
//       },
//       {
//         path: "/cabins",
//         element: <Cabins />,
//       },
//       {
//         path: "/account",
//         element: <Account />,
//       },
//     ],
//   },
//   { path: "/login", element: <Login /> },
//   { path: "*", element: <PageNotFound /> },
// ]);

// function App2() {
//   return (
//     <RouterProvider router={routes}>
//       <div></div>
//     </RouterProvider>
//   );
// }
