import Category from "./Components/Category/Category";
import CompanyDetail from "./Components/CompanyDetail/CompanyDetail";
import CompanyList from "./Components/CompanyList/CompanyList";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import JobDetail from "./Components/JobDetail/JobDetail";
import JobList from "./Components/JobList/JobList";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>

          <Route path={"/Category"}>
            <Category />
          </Route>

          <Route path={"/CompanyDetail"}>
            <CompanyDetail />
          </Route>

          <Route path={"/CompanyList"}>
            <CompanyList />
          </Route>

          <Route path={"/Contact"}>
            <Contact />
          </Route>

          <Route path={"/JobDetail"}>
            <JobDetail />
          </Route>

          <Route path={"/JobList"}>
            <JobList />
          </Route>

          <Route path={"/Login"}>
            <Login />
          </Route>

          <Route path={"/SignUp"}>
            <SignUp />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
