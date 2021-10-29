import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Details from "./components/Home/serviceDetails/Details";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Notfound from "./components/NotFound/Notfound";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import PriceTable from "./components/PriceTable/PriceTable";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details />
            </PrivateRoute>
            <PrivateRoute path="/book">
              <BookAppointment />
            </PrivateRoute>
            <PrivateRoute path="/pricing">
              <PriceTable />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
