import { Home, Profile, SignIn, SignUp} from "@/pages";
import HomeBuyer from "./pages/home-buyer";
import Services from "./pages/services";

export const routes = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    name: "home buyer",
    path: "/home-buyer",
    element: <HomeBuyer />,
  },
  {
    name: "services",
    path: "/services",
    element: <Services />,
  },
  {
    name: "Smsf",
    element: <SignIn />,
  },
  {
    name: "Refinance",
    element: <SignUp />,
  },
  {
    name: "loan",
    element: "",
  },
  {
    name: "loan calculator",
    element: <SignUp />,
  },
  {
    name: "become a broker",
    element: <SignUp />,
  },
  {
    name: "meet advisor",
    element: <SignUp />,
  },
  
];

export default routes;
