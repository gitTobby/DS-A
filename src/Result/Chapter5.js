import React from "react";
import { Fragment } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';

class Chapter5 extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render () {
        return (
            <Fragment>
                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">배열</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 4가지 기본연산 (삽입, 삭제, 접근, 검색)

                                    // 삽입
                                    var array1 = [1, 2, 3, 4];
                                    console.log( array1.push(5) );    // [1, 2, 3, 4, 5]
                                    console.log( array1.push(7) );    // [1, 2, 3, 4, 5, 7]
                                    console.log( array1.push(2) );    // [1, 2, 3, 4, 5, 7, 2]

                                    // 삭제
                                    var array1 = [1, 2, 3, 4];
                                    console.log( array1.pop() );    // 4 반환, array1 = [1, 2, 3]
                                    console.log( array1.pop() );    // 3 반환, array1 = [1, 2]

                                    var array1 = [1, 2, 3, 4];
                                    console.log( array1.shift() );    // 1 반환, array1 = [2, 3, 4]
                                    console.log( array1.shift() );    // 2 반환, array1 = [3, 4]

                                    // 접근
                                    var array1 = [1, 2, 3, 4];
                                    array1.[0];    // 1 반환
                                    array1.[1];    // 2 반환
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
                
                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">반복</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // for (변수; 조건; 수정;)
                                    for (var i = 0, len = array1.length; i < len; i++) {
                                        console.log(array1[i]);
                                    }
                                    ==> // 위 로직과 동일
                                        var counter = 0;
                                        while (counter < array1.length) {
                                            // 이곳에 코드 삽입
                                            counter++;
                                        }

                                        //무한루프
                                        while (true) {
                                            if (breakCondition) {
                                                break;
                                            }
                                        }

                                        for (   ;   ;   ) {
                                            if (breakCondition) {
                                                break;
                                            }
                                        }
                                    

                                    // for(in)
                                    // 배열을 반복 접근하기 위한 방법으로 인덱스를 하나씩 호출하는 방법이 있다.
                                    // in 앞에 지정된 index는 배열 인덱스다.
                                    var array1 = ['all', 'cows', 'are', 'big'];
                                    
                                    for (var index in array1) {
                                        console.log(index);
                                    }   // index 순차 출력

                                    for (var index in array1) {
                                        console.log(array1[index]);
                                    }   // Value(값) 순차 출력


                                    // for(of)
                                    // element는 배열의 Value(값)이다.
                                    var array1 = ['all', 'cows', 'are', 'big'];

                                    for (var element of array1) {
                                        console.log(element);
                                    }   // Value(값) 순차 출력


                                    // forEach()
                                    var array1 = ['all', 'cows', 'are', 'big'];

                                    array1.forEach ( function (element, index) {
                                        console.log(element);
                                    });   // Value(값) 순차 출력

                                    array1.forEach ( function (element, index) {
                                        console.log(array1[index]);
                                    });   // Value(값) 순차 출력
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">도움함수</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // .slice(begin, end);
                                    // 기존 배열을 수정하지 않고도 해당 배열의 일부를 반환한다.
                                    // .slice() 함수는 배열의 시작 인덱스와 끝 인덱스 두 개의 매개변수를 받는다.
                                    var array1 = [1,2,3,4];
                                    array1.slice(1, 2);     // [2]를 반환한다, array1 = [1, 2, 3, 4]
                                    array1.slice(2, 4);     // [3, 4]를 반환한다, array1 = [1, 2, 3, 4]

                                    



                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title"></div>
                        <pre>
                            <code className="language-js">
                                {`
                                    
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title"></div>
                        <pre>
                            <code className="language-js">
                                {`
                                    
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Chapter5;