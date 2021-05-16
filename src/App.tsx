import React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Router,
  BrowserRouter,
} from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
import Home from "./Container/Home";
import Login from "./Container/Login";
import Signup from "./Container/Signup";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/store";

const store = createStore(rootReducer);

const themeLight = createMuiTheme({
  palette: {
    primary: {
      main: "#166FFD",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "#ffffff",
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: "#000000",
      },
      colorSecondary: {
        color: "#757575",
      },
    },
  },
  typography: {
    button: {
      fontSize: "0.9rem",
      textTransform: "none",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const App = (props: any) => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <MuiThemeProvider theme={themeLight}>
            <main className={classes.content}>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </main>
          </MuiThemeProvider>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
