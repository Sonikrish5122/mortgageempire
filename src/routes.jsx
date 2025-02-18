import { Home,SignUp} from "@/pages";
import HomeBuyer from "./pages/home-buyer";
<<<<<<< Updated upstream
=======
import Services from "./pages/services";
import MortgageCalculator from "./pages/mortgage-caclulator";
>>>>>>> Stashed changes

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
    name: "investor",
    element: <Profile />,
  },
  {
    name: "Mortgage Caclulator",
    path: "/mortgage-calculator",
    element: <MortgageCalculator />,
  },
  // {
  //   name: "Refinance",
  //   element: <SignUp />,
  // },
  // {
  //   name: "loan",
  //   element: "",
  // },
  // {
  //   name: "loan calculator",
  //   element: <SignUp />,
  // },
  // {
  //   name: "become a broker",
  //   element: <SignUp />,
  // },
  // {
  //   name: "meet advisor",
  //   element: <SignUp />,
  // },
  
];

export default routes;
