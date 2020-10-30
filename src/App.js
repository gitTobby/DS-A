import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import 'prismjs/themes/prism-tomorrow.css';
import './css/common.css';

import ChapterList from './ChapterList'
import ChapterContent from './ChapterContent'

// import $ from "jquery";

// var vH = $(window).height();
// console.log(vH);


// $("nav a").click(function() {
//     $("nav a").removeClass('selected');
//     $(this).parent().toggleClass('selected');
// });

const App = () => {
    return (
        <Router>
            <div className="wrap">
                <nav>
                    <ChapterList />
                </nav>
                <section>
                    <ChapterContent />
                </section>
            </div>
        </Router>
    );
}

export default App;