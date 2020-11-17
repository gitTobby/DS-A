import React from "react";
// import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Chapter1 from "./Result/Chapter1";
import Chapter2 from "./Result/Chapter2";
import Chapter3 from "./Result/Chapter3";
import Chapter4 from "./Result/Chapter4";
import Chapter5 from "./Result/Chapter5";
/*
import Chapter6 from "./Result/Chapter6";
import Chapter7 from "./Result/Chapter7";
import Chapter8 from "./Result/Chapter8";
import Chapter9 from "./Result/Chapter9";
import Chapter10 from "./Result/Chapter10";
import Chapter11 from "./Result/Chapter11";
import Chapter12 from "./Result/Chapter12";
import Chapter13 from "./Result/Chapter13";
import Chapter14 from "./Result/Chapter14";
import Chapter15 from "./Result/Chapter15";
import Chapter16 from "./Result/Chapter16";
import Chapter17 from "./Result/Chapter17";
import Chapter18 from "./Result/Chapter18";
import Chapter19 from "./Result/Chapter19";
import Chapter20 from "./Result/Chapter20";
*/

const ChapterContent = () => {
    return (
        <Switch>
            <Route exact path="/" component={Chapter1} />
            <Route path="/Chapter1" component={Chapter1} />
            <Route path="/Chapter2" component={Chapter2} />
            <Route path="/Chapter3" component={Chapter3} />
            <Route path="/Chapter4" component={Chapter4} />
            <Route path="/Chapter5" component={Chapter5} />
            {/*
            <Route path="/Chapter6" component={Chapter6} />
            <Route path="/Chapter7" component={Chapter7} />
            <Route path="/Chapter8" component={Chapter8} />
            */}
        </Switch>
    );
}

export default ChapterContent;