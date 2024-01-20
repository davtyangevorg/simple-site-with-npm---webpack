// app.js
import React from "react";

import { Button } from "./button/index.jsx";
import { getUserData } from "./helpers/index.js";

const App = () => {
  const getUserDataAsync = async () => {
    const data = await getUserData();
    console.log("data", data);
  };

  React.useEffect(() => {
    getUserDataAsync();
  }, []);

  React.useEffect(() => {
    // Example usage of Atomics.waitAsync
    console.log("result", Atomics.waitAsync);
  }, []);

  return (
    <div>
      <div>safdsadfssdf asldkfj sadfdf</div>
      <Button />
    </div>
  );
};

export default App;
