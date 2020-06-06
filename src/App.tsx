import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.styles";
import GlobalStyles from "./styles/Global.styles";
import { Provider } from "react-redux";
import store from "./redux/index";
import Layout from "./components/layout";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={MainPage} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
      <GlobalStyles />
    </>
  );
};

export default App;
