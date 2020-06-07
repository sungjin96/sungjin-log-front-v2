import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/main/Main.page";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.styles";
import GlobalStyles from "./styles/Global.styles";
import { Provider } from "react-redux";
import store from "./redux/index";
import UserLayout from "./components/userLayout";
import PostWritePage from "./pages/postWrite/PostWrite.page";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <UserLayout>
                    <MainPage />
                  </UserLayout>
                )}
              />
              <Route exact path="/write" render={() => <PostWritePage />} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
