// import React from "react";
// import 'prismjs/themes/prism-tomorrow.css';
// import 'prismjs';
// import 'prismjs/components/prism-bash';
// import 'prismjs/components/prism-javascript';

// const Chapter1 = ({ value, language }) => {

//     return (
//         <pre className="line-numbers">
//             <code className="language-js">
//             {
//                 function exampleLinear(n) {
//                     for (var i = 0; i < n; i++) {
//                         console.log(i);
//                     }
//                 }
//             }
//             </code>
//         </pre>
        


//     );
// }

// export default Chapter1;




//선형시간 복잡도
function exampleLinear(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}

exampleLinear();

//2차시간 복잡도
function exampleQuadratic(n) {
    for (var i = 0 ; i < n; i++) {
        console.log(i);
        for (var j = i; j < n; j++) {
            console.log(j);
        }
    }
}

//3차시간 복잡도
function exampleCubic(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
        for (var j = i; j < n; j++) {
            console.log(j);
            for (var k = j; k < n; k++) {
                console.log(k)
            }
        }
    }
}

//로그시간 복잡도
function exampleLogarithmic(n) {
    for (var i = 2; i <= n; i = i*2) {
        console.log(n);
    }
}



exampleCubic(10);