import React from "react";
import NewPostWizard from "./Components/NewPostWizard";
import AllPosts from "./Components/AllPosts";

const App = () => {
  return (
    <div className="container">
      <NewPostWizard />
      <AllPosts />
    </div>
  );
};

export default App;
