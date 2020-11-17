import React from "react";
import { Fragment } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';


class Chapter1 extends React.Component {
    state = {
        results: [],
        results2: [],
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    //예제함수
    exampleLinear = (n) => {
        let arr = [];
        for (var i = 0; i < n; i++) {
            arr.push(i);
        }
        return arr;
    }
    exampleQuadratic = (n) => {
        let arr = [];
        //let arr2 = [];
        for (var i = 0 ; i < n; i++) {
            arr.push(i);
            for (var j = i; j < n; j++) {
                arr.push(j);
            }
        }
        return arr;
    }

    handleClick = (a) => {
        // if (a === 1) {
        //     const result = this.exampleLinear(10);
        //     this.setState({
        //         results: result
        //     })
        // }

        if (a === 1) {
            const result = this.exampleLinear(10);
            this.setState({
                results: result
            })
        } else if (a === 2) {
            const result = this.exampleQuadratic(10);
            this.setState({
                results2: result
            })
            
        }

        
        
    }

    render() {
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
                                <button type="button" onClick={() => this.handleClick(1)}>결과보기</button>
                                <div className="results">Result: {this.state.results.map(item => item + ",")}</div>
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
                                <button type="button" onClick={() => this.handleClick(2)}>결과보기</button>
                                <div className="results">
                                    Result: {
                                        this.state.results2.map(item => {
                                            item
                                            console.log(item);
                                        })
                                        
                                    }
                                </div>
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