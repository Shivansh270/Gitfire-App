import { useState, useContext } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

//components and layout
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";


import FirebaseConfig  from "./Config/FirebaseConfig"

firebase.initializeApp(FirebaseConfig)

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/signin" element={<Signin></Signin>} />
          <Route exact path="/signup" element={<Signup></Signup>} />
          <Route exact path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
