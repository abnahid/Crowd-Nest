import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../Pages/AboutPage";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import SupportPage from "../Pages/SupportPage";
import AddCampaign from "./../Pages/AddCampaign";
import CampaignDetails from "./../Pages/CampaignDetails";
import Campaigns from "./../Pages/Campaigns";
import MyCampaign from "./../Pages/MyCampaign";
import MyDonations from "./../Pages/MyDonations";
import UpdateCampaign from "./../Pages/UpdateCampaign";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://crowd-nest-server.vercel.app/active"),
        },
        {
          path: "/campaigns",
          element: <Campaigns></Campaigns>,
          loader: () => fetch("https://crowd-nest-server.vercel.app/campaigns"),
        },
        {
          path: "/support",
          element: <SupportPage></SupportPage>,
        },
        {
          path: "/about",
          element: <AboutPage></AboutPage>,
        },
        {
          path: "/addCampaign",
          element: (
            <PrivateRoute>
              <AddCampaign></AddCampaign>
            </PrivateRoute>
          ),
        },
        {
          path: "updateCampaign/:id",
          element: (
            <PrivateRoute>
              <UpdateCampaign></UpdateCampaign>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://crowd-nest-server.vercel.app/campaigns/${params.id}`
            ),
        },
        {
          path: "details/:id",
          element: (
            <PrivateRoute>
              <CampaignDetails></CampaignDetails>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://crowd-nest-server.vercel.app/campaigns/${params.id}`
            ),
        },
        {
          path: "/my-campaign",
          element: (
            <PrivateRoute>
              <MyCampaign></MyCampaign>
            </PrivateRoute>
          ),
          loader: () => fetch("https://crowd-nest-server.vercel.app/campaigns"),
        },
        {
          path: "/my-donations",
          element: (
            <PrivateRoute>
              <MyDonations></MyDonations>
            </PrivateRoute>
          ),
          loader: () => fetch("https://crowd-nest-server.vercel.app/campaigns"),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
