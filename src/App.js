import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Book from "./components/Home/Booking/Book";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Notfound from "./components/NotFound/Notfound";
import UserBookings from "./components/UserBookings/UserBookings";
import ManageBookings from "./components/ManageBookings/ManageBookings";
import AddNewPlace from "./components/AddNewPlace/AddNewPlace";
import About from "./components/About/About";

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
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/book/:serviceId">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <UserBookings />
            </PrivateRoute>
            <PrivateRoute path="/manage-bookings">
              <ManageBookings />
            </PrivateRoute>
            <PrivateRoute path="/add-new-package">
              <AddNewPlace />
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
