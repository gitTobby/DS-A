import React from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Chapter1 from "./Result/Chapter1";
import Chapter2 from "./Result/Chapter2";

const ChapterContent = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/Chapter1" component={Chapter1} />
                <Route path="/Chapter2" component={Chapter2} />
                {/*
                <Route path="/Chapter3" component={Chapter3} />
                <Route path="/Chapter4" component={Chapter4} />
                <Route path="/Chapter5" component={Chapter5} />
                <Route path="/Chapter6" component={Chapter6} />
                <Route path="/Chapter7" component={Chapter7} />
                <Route path="/Chapter8" component={Chapter8} />
                */}
            </Switch>
        </Fragment>
    );
}

export default ChapterContent;