import CardSkeleton from "./compoent/CardSkeleton";
import ContactForm from "./compoent/ContactForm";
import Footer from "./compoent/Footer";
import SubscriptionsCard from "./compoent/SubscriptionsCard";
import TeamSection from "./compoent/TeamSection";

import HeaderLayout from "./layout/HeaderLayout";
import Navigation from "./layout/Navigation";

import { useRoutes } from "react-router-dom";
import routes from "./router/router";

function App() {
  let element = useRoutes(routes);
  return (
    <div className="font-semibold">
      {element}
      {/* <Login />
      <ResetPass />
      <Register /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
