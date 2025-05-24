import React from "react";
import Appoinments from "./Appoinments";
import Header from "./Header";
import Sidebar from "./sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Header/>
      <Appoinments />
    </>
  );
};

export default App;
