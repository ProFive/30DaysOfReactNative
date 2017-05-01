import React from "react";
import { DrawerNavigator } from "react-navigation";

import Workspace from "./Workspace";
import Dashboard from "./Dashboard";
import Issues from "./Issues";
import Plans from "./Plans";
import Maps from "./Maps";
import Viewer from "./Viewer";
import Notification from "./Notification";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Setting from "./Setting";
import DrawerContent from "../components/DrawerContent";

const Authorized = DrawerNavigator(
  {
    Workspace:{screen:Workspace},
    Dashboard:{screen:Dashboard},
    Issues:{screen:Issues},
    Plans: { screen: Plans },
    Maps: { screen: Maps },
    Viewer:{screen:Viewer},
    Notificawtion:{screen:Notification},
    About:{screen:About},
    Profile: { screen: Profile },
    Setting: { screen: Setting },
    Home: { screen: Home },
    //    Logout: { screen: '' },
  },
  {
    contentComponent: props => <DrawerContent {...props} />
  }
);
export default Authorized;
