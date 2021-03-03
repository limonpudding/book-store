import React from "react";
import {Container} from "reactstrap";
import Header from "../header/header";
import Catalog from "../catalog/catalog";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";

const MainPage = () => {

    return (
        <Container>
            <Header />

            <Router>
                <Switch>
                    <Route path="/author/:authorId">
                        <Catalog />
                    </Route>
                    <Route path="/">
                       <Catalog />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default MainPage;