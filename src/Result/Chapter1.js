import React from "react";
import { Fragment } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';

class Chapter1 extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render () {
        return (
            <Fragment>
                <div className="sec_code">
                    <div className="code_bx">
                        <div className="code_title">선형시간 복잡도</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    function exampleLinear(n) {
                                        for (var i = 0; i < n; i++) {
                                            console.log(i);
                                        }
                                    }
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="result_bx">
                        <div className="rs_title">Result</div>
                        <div className="rs_content">
                            <div className="inbx">
                                <button type="button">결과보기</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec_code">
                    <div className="code_bx">
                        <div className="code_title">2차시간 복잡도</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    function exampleQuadratic(n) {
                                        for (var i = 0 ; i < n; i++) {
                                            console.log(i);
                                            for (var j = i; j < n; j++) {
                                                console.log(j);
                                            }
                                        }
                                    }
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="result_bx">
                        <div className="rs_title">Result</div>
                        <div className="rs_content">
                            <div className="inbx">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec_code">
                    <div className="code_bx">
                        <div className="code_title">3차시간 복잡도</div>
                        <pre>
                            <code className="language-js">
                                {`
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
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="result_bx">
                        <div className="rs_title">Result</div>
                        <div className="rs_content">
                            <div className="inbx">
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sec_code">
                    <div className="code_bx">
                        <div className="code_title">로그시간 복잡도</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    function exampleLogarithmic(n) {
                                        for (var i = 2; i <= n; i = i*2) {
                                            console.log(n);
                                        }
                                    }
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="result_bx">
                        <div className="rs_title">Result</div>
                        <div className="rs_content">
                            <div className="inbx">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Chapter1;