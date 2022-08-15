import React from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <>
            <MainHeader />
            <main>
              {!ctx.isLoggedIn && <Login />}
              {ctx.isLoggedIn && <Home />}
            </main>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default App;
