import React from "react";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./compo/Navbar";
import Home from "./compo/Home";
import Register from "./compo/Register";
import Login from "./compo/Login";
import NewAddPost from "./compo/NewAddPost";
const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/new-post" component={NewAddPost} />
            </Switch>
        </div>
    );
};
export default App;
