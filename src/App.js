import React, { useEffect, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blogs from "./Pages/Blog/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProjectProvider from "./Pages/context/ProjectProvider";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import PreLoader from "./Pages/PreLoader/PreLoader";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Projects from "./Pages/Projects/Projects";
import "./tailwind.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <ProjectProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/blogs">
                <Blogs></Blogs>
              </Route>
              <Route path="/contactus">
                <ContactUs></ContactUs>
              </Route>
              <Route path="/projectdetails/:projectId">
                <ProjectDetails></ProjectDetails>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <MessengerCustomerChat
              pageId={process.env.REACT_APP_PAGE_ID}
              appId={process.env.REACT_APP_FAC_ID}
            />
            <Footer />
          </BrowserRouter>
        </ProjectProvider>
      )}
    </>
  );
};

export default App;
