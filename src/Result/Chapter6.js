import React from "react";
import { Fragment } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';

class Chapter6 extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render () {
        return (
            <Fragment>
                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">자바스크립트 객체 속성</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // var new object();
                                    // var object = {};
                                    
                                    // [접근방법]
                                    // 객체.속성이름 || 객체['속성이름']
                                    // object.propertyName || object['propertyName']

                                    var javaScriptObject = {};
                                    var testArray = [1, 2, 3, 4];

                                    javaScriptObject.array = testArray;
                                    console.log(javaScriptObject);  // {array: [1, 2, 3, 4]}

                                    javaScriptObject.title = 'Algorithms';
                                    console.log(javaScriptObject);  // {array: [1, 2, 3, 4], title: 'Algorithms'};
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">프로토타입 활용 상속</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 자바스크립트에서는 함수가 클래스의 자바스크립트 Object 속성으로 추가돼야한다.
                                    // 자바와 같은 Strongly Typed 언어에서는 클래스의 메소드가 클래스와 동시에 정의된다.

                                    function ExampleClass() {
                                        this.name = "JavaScript";
                                        this.sayName = function() {
                                            console.log(this.name);
                                        }
                                    }

                                    // 신규 객체
                                    var example1 = new ExampleClass();
                                    example1.sayName(); // "JavaScript"
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">.prototype 사용하여 메소드를 동적으로 추가함</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 함수를 클래스에 동적으로 추가하는 방식이 자바스크립트가 프로토타입 활용 상속을 구현한 방식이다.
                                    function ExampleClass() {
                                        this.array = [1, 2, 3, 4];
                                        this.name = "JavaScript";
                                    }

                                    // 신규 객체
                                    var example1 = new ExampleClass();

                                    ExampleClass.prototype.sayName = function() {
                                        console.log(this.name);
                                    }

                                    example1.sayName(); // "Javascript"
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">생성자와 변수</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // this.속성이름
                                    // this.propertyName
                                    function ExampleClass(name, size) {
                                        this.name = name;
                                        this.size = size;
                                    }

                                    var example = new ExampleClass("Public", 5);
                                    console.log(example);   // {name: "Public", size: 5}

                                    // 공개 변수 접근하기
                                    console.log(example.name);  // "Public"
                                    console.log(example.size);  // 5
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">get, set을 이용한 접근</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    function ExampleClass(name, size) {
                                        var privateName = name;
                                        var privateSize = size;

                                        this.getName = function() return privateName;
                                        this.setName = function(name) {privateName = name};

                                        this.getSize = function() return privateSize;
                                        this.setSize = function(size) {privateSize = size};
                                    }

                                    var example = new ExampleClass("Sammie", 3);
                                    example.setSize(12);
                                    console.log(example.privateName);   // undefined (직접 접근불가)
                                    console.log(example.getName());     // "Sammie"
                                    console.log(example.size);          // undefined (직접 접근불가)
                                    console.log(example.getSize());     // 12
                                `}
                            </code>
                        </pre>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Chapter6;