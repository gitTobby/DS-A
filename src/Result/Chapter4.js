import React from "react";
import { Fragment } from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';

class Chapter4 extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render () {
        return (
            <Fragment>
                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">문자열 접근</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // .charAt(index)는 0부터 시작하는 인덱스를 입력 값으로 받고
                                    // 문자열의 해당 인덱스 위치에 있는 문자를 반환한다.
                                    'dog'.charAt(1);    // 'o' 반환한다.

                                    // .subString(startIndex, endIndex)
                                    'YouTube'.substring(1,2);   // 'o'를 반환한다.
                                    'YouTube'.substring(3,7);   // 'Tube'를 반환한다.
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">문자열 비교</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    var a = 'a';
                                    var b = 'b';
                                    console.log(a < b);     // true
                                    
                                    var a = 'add';
                                    var b = 'b';
                                    console.log(a < b);     // true

                                    var a = 'add';
                                    var b = 'ab';
                                    console.log(a < b);     // false

                                    console.log('add' < 'ab == 'ad' < 'ab');    // true
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">문자열 검색</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // .indexOf(searchValue[, fromIndex]);
                                    // 검색하고잦 하는 문자열을 매개변수로 받는다.
                                    // 선택적으로 검색 시작 인덱스를 지정하는 매개변수도 받는다.
                                    // 일치하는 문자열의 <위치(Index)>를 반환한다.
                                    // 일치하는 문자열을 발견하지 못한 경우 -1이 반환된다.
                                    // 대소문자 구분한다.
                                    'Red Dragon'.indexOf('Red');        // 0을 반환한다.
                                    'Red Dragon'.indexOf('RedScale');   // -1을 반환한다.
                                    'Red Dragon'.indexOf('Dragon', 0);  // 4를 반환한다.
                                    'Red Dragon'.indexOf('Dragon', 4);  // 4를 반환한다.
                                    'Red Dragon'.indexOf('', 9);        // 9를 반환한다.

                                    // 문자열 존재여부 확인
                                    function existsInString (stringValue, search) {
                                        return stringValue.indexOf(search) !== -1;
                                    }
                                    console.log(existsInString('red', 'r'));    // true
                                    console.log(existsInString('red', 'b'));    // false

                                    // 문자열 반복 횟수
                                    var str = "He's my king from this day until his last day";
                                    var count = 0;
                                    var pos = str.indexOf('a');   // 여기까지 console.log(pos) => 24 반환
                                    while (pos !== -1 ) {
                                        count++;
                                        pos = str.indexOf('a', pos + 1);
                                    }
                                    console.log(count);     // '3'을 출력한다.

                                    // 특정 문자열로 시작 또는 끝 여부 확인 (boolean)
                                    'Red Dragon'.startWidth('Red');     // true
                                    'Red Dragon'.endtWidth('Dragon');   // true
                                    'Red Dragon'.startWidth('Dragon');  // true
                                    'Red Dragon'.startWidth('Red');     // true
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">문자열 분해</div>
                        <pre>
                            <code className="language-js">
                                {`
                                     // .split(separator) 함수는 하나의 매개변수(분리자/구분자)를 입력받아 부분 문자열 배열을 생성한다.
                                     var test1 = 'chicken,noodle,soup,broth';
                                     test1.split(',');  // ["chicken", "noodle", "soup", "broth"]

                                     // 빈 분리자를 전달하면 문자열 내 모든 문자로 구성된 배열이 생성된다.
                                     var test1 = 'chicken';
                                     test1.split('');  // ["c", "h", "i", "c" ,"k" ,"e" ,"n"]
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">문자열 바꾸기</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // .replace(string, replaceString) 함수는 문자열 변수 내에 특정 문자열을 다른 문자열로 대체한다.
                                    "Wizard of Oz".replace("Wizard", "Witch");  //  "Witch of Oz"
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">정규표현식(Regular Expression)</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 정규표현식 생성은 컴파일(compile), 실행(execution)의 두가지 단계로 이루어진다.

                                    // 컴파일: 패턴을 찾는다.
                                    var srt = 'a';                  // 변수선언
                                    var pattern = /a/;              // 정규표현식 리터럴
                                    var pattern = new RegExp('a');  // 정규표현식 객체 생성자
                                    // /a/ == new RegExp('a')

                                    // 실행: 찾은 패턴(대상)에 대한 구체적인 작업
                                    
                                    RegExp.exec();
                                    RegExp.test();
                                    RegExp.match();
                                    RegExp.replace();
                                    RegExp.search();
                                    RegExp.split();
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="code_bx">
                        <div className="code_title">RegExp</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // exec 함수는 찾고자하는 대상을 첫번째 매개변수로 전달하여,
                                    // 패턴의 정보를 대상에서 찾아서 있으면 배열로 리턴하는 함수
                                    var pattern = /a/;
                                    var pattern.exec('abcd');   // ['a']

                                    var pattern = /a./;
                                    var pattern.exec('abcd');   // ['ab']

                                    var pattern = /a/;
                                    var pattern.exec('bcdef');   // null

                                    // test 함수는 패턴에 해당하는 문자열이 있으면 true, 없으면 false (boolean)
                                    var pattern = /a/;
                                    var pattern.test('abcd');      // true
                                    var pattern.test('bcdef');     // false
                                    
                                    // match
                                    var str = 'abcdef';
                                    var pattern = /a/;
                                    var str.match(pattern);     // ['a']

                                    var str = 'bcdef';
                                    var pattern = /a/;
                                    var str.match(pattern);     // null

                                    // replace
                                    var str = 'abcdef';
                                    var pattern = /a/;
                                    var str.replace(pattern, 'A');  // "Abcdef"
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="code_bx">
                        <div className="code_title">정규표현식 플래그(옵션)</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    g : 검색된 모든 결과를 리턴한다.(전역검색)
                                    i : 대소문자를 구분하지 않는다.
                                    m : multi-line 검색
                                    s : .에 개행 문자도 매칭(ES2018)
                                    u : 유니코드 패턴을 유니코드 코드 포인트의 나열로 취급
                                    y : "sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다.
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="code_bx">
                        <div className="code_title">기본 정규표현식</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    ^ : 문자열/줄의 시작을 나타낸다.
                                    \\d : 모든 숫자를 찾는다.
                                    [abc] : 괄호 내의 모든 문자를 찾는다.
                                    [^abc] : 괄호 내의 문자들을 제외한 모든 문자를 찾는다.
                                    [0-9] : 괄호 내의 모든 숫자를 찾는다.
                                    [^0-9] : 괄호 내의 숫자들을 제외한 모든 숫자를 찾는다.
                                    (x|y) : x 또는 y를 찾는다.
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="code_bx">
                        <div className="code_title">자주 사용하는 정규표현식</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 숫자를 포함하는 문자
                                    var reg = /\\d+/;
                                    reg.test('123');        // true
                                    reg.test('33asd');      // true
                                    reg.test('5asdasd');    // true
                                    reg.test('asdasd');     // false

                                    // 숫자만 포함하는 문자
                                    var reg = /^\\d+$/;
                                    reg.test('123');    // true
                                    reg.test('123a');   // false
                                    reg.test('a');      // false

                                    // 부동소수점 문자
                                    var reg = /^[0-9]*.[0-9]*[0-9]+$/;
                                    reg.test('12');     // false
                                    reg.test('12.2');   // true

                                    // 숫자와 알파벳만을 포함하는 문자
                                    var reg = /[a-zA-Z0-9]/;
                                    reg.test('somethingELSE');  // true
                                    reg.test('hello');          // true
                                    reg.test('112a');           // true
                                    reg.test('112');            // true
                                    reg.test('^');              // false
                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="code_bx">
                        <div className="code_title">질의 문자열</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // /([^?=&]+)(=([^&]*))/

                                    // 웹 애플리케이션에서 웹 URL은 대개 경로 찾기나 데이터베이스 질의 목적의 매개변수를 포함한다.
                                    http://www.abcd.com/product.aspx?category=4&product_id=2140&query=lcd+tv
                                    => SELECT LCD, TV FROM database WHERE Category = 4 AND Product_id = 2140;

                                    var url = 'http://www.abcd.com/product.aspx?category=4&product_id=2140&query=lcd+tv';
                                    var qureryString = {};
                                    url.replace =(
                                        new RegExp('([^?=&]+)(=([^&]*))', 'g'),
                                        function ($0, $1, $2, $3) {
                                            queryString[$1] = $3;
                                        }
                                    );
                                    console.log('ID: ' + queryString['product_id']);        // ID: 2140
                                    console.log('Name: ' + queryString['product_name']);    // Name: undefined
                                    console.log('Category: ' + queryString['category']);    // Category: 4

                                `}
                            </code>
                        </pre>
                    </div>
                    <div className="notice">
                        <p>정규표현식을 모두 다룰 수 없고 더 심화된 내용을 스터디하기 위해 기본적인 부분에 대해서만 확인하고 차후 다시 공부한다.</p>
                        <p>참고사이트</p>
                        <p className="child">MDN: <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/정규식" target="_blank">https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/정규식</a></p>
                        <p className="child">생활코딩: <a href="https://opentutorials.org/course/743/6580" target="_blank">https://opentutorials.org/course/743/6580</a></p>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">인코딩</div>
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
                        <div className="code_title">암호화/복호화</div>
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

export default Chapter4;