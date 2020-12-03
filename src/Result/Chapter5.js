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


                                    // 참고
                                    join(): 문자열로 리턴 (원본 변경 X)
                                    reverse(): 거꾸로 변경
                                    sort(): 배열 정렬
                                    concat(arr): 배열 이어 붙임 (원본 변경 X)
                                    slice(beginIndex, endIndex): 부분 배열 반환 (원본 변경 X)
                                    splice(beginIndex, endIndex): 삭제/추가
                                    push(element): 맨뒤 추가
                                    pop(): 맨뒤 삭제
                                    shift(): 맨앞 삭제
                                    unshift(): 맨앞 추가
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
                                    

                                    // for(in);
                                    // 배열을 반복 접근하기 위한 방법으로 [인덱스]를 하나씩 호출하는 방법이 있다.
                                    // in 앞에 지정된 index는 배열 인덱스다.
                                    var array1 = ['all', 'cows', 'are', 'big'];
                                    
                                    for (var index in array1) {
                                        console.log(index);
                                    }   // index 순차 출력

                                    for (var index in array1) {
                                        console.log(array1[index]);
                                    }   // Value(값) 순차 출력


                                    // for(of);
                                    // element는 배열의 Value(값, 항목)이다.
                                    var array1 = ['all', 'cows', 'are', 'big'];

                                    for (var element of array1) {
                                        console.log(element);
                                    }   // Value(값) 순차 출력


                                    // forEach();
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
                                    // .slice(begin);
                                    // .slice(begin, end); (end 미포함)
                                    // 기존 배열을 수정하지 않고도 해당 배열의 일부를 반환한다.
                                    // .slice(); 함수는 배열의 시작 인덱스와 끝 인덱스 두 개의 매개변수를 받는다.
                                    var array1 = [1,2,3,4];
                                    array1.slice();         // [1, 2, 3, 4]를 반환한다, array1 = [1, 2, 3, 4]
                                    array1.slice(2);        // [3, 4]를 반환한다, array1 = [1, 2, 3, 4]
                                    array1.slice(1, 2);     // [2]를 반환한다, array1 = [1, 2, 3, 4]
                                    array1.slice(2, 4);     // [3, 4]를 반환한다, array1 = [1, 2, 3, 4]
                                    // array1.slice() === array1;   // false (메모리상의 주사가 다르기 때문!)


                                    var array1 = [1, 2, 3, 4],
                                        array2 = array1;
                                    
                                    array1;     // [1, 2, 3, 4] 반환
                                    array2;     // [1, 2, 3, 4] 반환
                                    
                                    array2[0] = 5;
                                    
                                    array1;     // [5, 2, 3, 4] 반환
                                    array2;     // [5, 2, 3, 4] 반환


                                    // array2가 원래 배열에 대한 참조이기 때문에 새로운 배열을 생성하려면 .from()을 사용한다.
                                    // .from()의 시간복잡도는 O(n)이다.
                                    var array1 = [1, 2, 3, 4];
                                    var array2 = Array.from(array1);

                                    array1;     // [1, 2, 3, 4] 반환
                                    array2;     // [1, 2, 3, 4] 반환
                                    
                                    array2[0] = 5;
                                    
                                    array1;     // [1, 2, 3, 4] 반환
                                    array2;     // [5, 2, 3, 4] 반환


                                    // .splice(began, size, element1, element2, ...)
                                    // 선택한 항목을 신규 항목으로 대체
                                    // 사용하면 배열 내용이 변경됨
                                    // 배열에 어떤 것이든(모든 종류의 객체) 추가할 수 있다.
                                    var array1 = [1, 2, 3, 4];
                                    array1.splice();        // [] 반환, array1 = [1, 2, 3, 4]
                                    array1.splice(1, 2);    // [2, 3] 반환, array1 = [1, 4]

                                    var array1 = [1, 2, 3, 4];
                                    array1.splice();        // [] 반환, array1 = [1, 2, 3, 4]
                                    array1.splice(1, 2, 5, 6, 7);    // [2, 3] 반환, array1 = [1, 5, 6, 7, 4]

                                    var array1 = [1, 2, 3, 4];
                                    array1.splice(1, 2, [5, 6, 7]);     // [2, 3] 반환, array1 = [1, [5, 6, 7], 4]
                                    array1 = [1, 2, 3, 4];
                                    array1.splice(1, 2, {'ss' : 1});    //  [2, 3] 반환, array1 = [1, {'ss' : 1}, 4]


                                    // .concat()
                                    // 신규 항목을 배열의 맨 뒤에 추가한 다음 해당 배열을 반환한다.
                                    var array1 = [1, 2 ,3, 4];
                                    array1.concat();            // [1, 2 ,3, 4] 반환, array1 = [1, 2 ,3, 4]
                                    array1.concat([2, 3, 4]);   // [1, 2, 3, 4, 2, 3, 4] 반환, array1 = [1, 2 ,3, 4]


                                    // .length()
                                    // 해당 속성을 더 작은 크기로 변경하면 항목에 배열들이 제거된다.
                                    var array1 = [1, 2 ,3, 4];
                                    console.log(array1.length);     // 4를 출력한다
                                    array1.length = 3;              // array1 = [1, 2, 3]

                                    // 전개 연산자
                                    // ... 으로 표현하며 제로인자가 기대되는 곳에서 인자를 확장하는데 사용된다.
                                    function addFourNums(a, b, c, d) {
                                        return a + b + c + d;
                                    }
                                    var numbers = [1, 2, 3, 4];
                                    console.log(addFourNums(...numbers));   // 10 출력

                                    // Math.max(); -> 배열에서 최댓값 찾기
                                    var array1 = [1, 2, 3, 4, 5];
                                    Math.max(...array1); // 5 반환

                                    // Math.min(); -> 배열에서 최솟값 찾기
                                    var array2 = [3, 2, -123, 2132, 12];
                                    Math.min(...array2); // -123 반환
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제1</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 어떤 수가 주어졌을 때 벼열 내의 어떤 항목 두 개를 합쳐야 해당 수가 되는지 찾아라
                                    function findSum(arr, weight) {
                                        for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                                            for (var j = i + 1; j < arrLength; i++) {
                                                if (arr[i] + arr[j] == weight) {
                                                    return [i, j]
                                                }
                                            }
                                        }
                                        return -1;
                                    }

                                    var arr = [1, 2, 3, 4, 5];
                                    var weight = 9;

                                    findSum(arr, 9);

                                    // 반응이 없음!!
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제1 리펙토링</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    function findSumBetter(arr, weight) {
                                        var hashtable = {};

                                        for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                                            var currentElement = arr[i],
                                                difference = weight - currentElement;
                                            
                                            // check the right one already exists
                                            if (hashtable[currentElement] != undefined) {
                                                return [i, hashtable[currentElement]];
                                            }   else {
                                                // store index
                                                hashtable[difference] = i;
                                            }
                                        }
                                        return -1;
                                    }
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제2</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // .slice() 함수가 무엇을 수행하는지 복습
                                    // arraySlice(array, beginIndex, endIndex); 구현
                                    function arraySlice(array, beginIndex, endIndex) {
                                        // 전달된 매개변수가 없으면 그냥 배열을 반환한다.
                                        if (!beginIndex && !endIndex) {
                                            return array;
                                        }

                                        // 시작 인덱스만 존재하는 경우 endIndex를 배열의 크기로 설정한다.
                                        endIndex = array.length;

                                        var partArray = [];

                                        // 시작 인덱스와 끝 인덱스 모두 지정된 경우 배열의 일부를 반환한다.
                                        for (var i = beginIndex; i < endIndex; i++) {
                                            partArray.push(array[i]);
                                        }
                                        return partArray;
                                    }
                                    arraySlice([1, 2, 3, 4], 1, 2);     // [2]
                                    arraySlice([1, 2, 3, 4], 2, 4);     // [3, 4]
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제3</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 두 개의 정렬된 배열이 동일한 크기일 때 해당 배열들의 중앙값 찾기
                                    // [1, 2, 3, 4]의 중앙값은 (2 + 3) / 2 = 2.5
                                    function medianOfArray(array) {
                                        var length = array.length;
                                        // 홀수
                                        if (length % 2 == 1) {
                                            return array[Math.floor(length / 2)];
                                        } else {
                                            // 짝수
                                            return (array[length / 2] + array[length / 2 - 1]) / 2;
                                        }
                                    }
                                    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
                                    medianOfArray(array);   // 5.5 출력
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제3</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 두 개의 정렬된 배열이 다른 크기일 때 해당 배열들의 중앙값 찾기
                                    function medianOfArray(array) {
                                        var length = array.length;
                                        // 홀수
                                        if (length % 2 == 1) {
                                            return array[Math.floor(length / 2)];
                                        } else {
                                            // 짝수
                                            return (array[length / 2] + array[length / 2 - 1]) / 2;
                                        }
                                    }

                                    function medianOfTwoSortedArray(arr1, arr2, pos) {
                                        if (pos <= 0) return -1;
                                        if (pos == 1) return (arr1[0] + arr2[0]) / 2;
                                        if (pos == 2) return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

                                        var median1 = medianOfArray(arr1);
                                        var median2 = medianOfArray(arr2);

                                        if (median1 == median2) return median1;

                                        var evenOffset = pos % 2 == 0 ? 1 : 0,
                                            offsetMinus = Math.floor(pos / 2) - evenOffset,
                                            offsetPlus = Math.floor(pos / 2) + evenOffset;

                                        if (median1 < median2) {
                                            return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
                                        } else {
                                            return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus);
                                        }
                                    }
                                    medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3);        // 3.5
                                    medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
                                    medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3);        // 2.5
                                `}
                            </code>
                        </pre>
                    </div> 
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">연습문제4</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // k개의 정렬된 배열에서 공통 항목 찾기
                                    var arr1 = [1, 5, 5, 10];
                                    var arr2 = [3, 4, 5, 5, 10];
                                    var arr3 = [5, 5, 10, 20];
                                    var output = [5, 10];
                                    
                                    function commonElements(kArray) {
                                        var hashmap = {},
                                            last, answer = [];

                                        for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
                                            var currentArray = kArray[i];
                                                last = null;
                                            for (var j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
                                                var currentElement = currentArray[j];
                                                if (last != currentElement) {
                                                    if (!hashmap[currentElement]) {
                                                        hashmaap[currentElement = 1;
                                                    } else {
                                                        hashmap[currentElement]++;
                                                    }
                                                }
                                                last = currentElement;
                                            }
                                        }

                                        // Iterate through hashmap
                                        for (var prop in hasmap) {
                                            if (hashmap[prop] == kArray.length) {
                                                answer.push(parseInt(prop));
                                            }
                                        }
                                        return answer;
                                    }
                                    commonElements([[1, 2, 3], [1, 2, 3, 4], [1, 2]]);   // [1, 2]
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">자바스크립트 함수형 배열 메소드</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // map : 매개변수로 전달된 함수 변환을 배열의 모든 항목에 적용한 다음 변환이 적용된 항목들을 포함하는 신규 배열을 반환
                                    // filter : 매개변수로 전달된 조건을 충족시키는 배열들만 반환
                                    // reduce: 매개변수로 전달된 변환 함수를 사용해 배열의 모든 항목을 하나의 값으로 결합
                                    // **두번째 인자로 initalValue를 줄 수 있다.

                                    // map : 매개변수로 전달된 함수 변환을 배열의 모든 항목에 적용한 다음 변환이 적용된 항목들을 포함하는 신규 배열을 반환
                                    [1, 2, 3, 4, 5, 6, 7].map(function(value){
                                        return value * 10;
                                    });
                                    // [10, 20, 30, 40, 50, 60, 70]

                                    // filter : 매개변수로 전달된 조건을 충족시키는 배열들만 반환 (원본 변경 X)
                                    [100, 2003, 10, 203, 333, 12].filter(function(value) {
                                        return value > 100;
                                    });
                                    // [2003, 203, 333]

                                    // reduce: 매개변수로 전달된 변환 함수를 사용해 배열의 모든 항목을 하나의 값으로 결합
                                    var sum = [0, 1, 2, 3, 4].reduce(function(prevVal, currentVal, index, array) {
                                        return prevVal + currentVal;
                                    });
                                    console.log(sum);   // 10 출력

                                    var sum = [0, 1, 2, 3, 4].reduce(function(prevVal, currentVal, index, array) {
                                        return prevVal + currentVal;
                                    }, 1);
                                    console.log(sum);   // 11 출력
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">다차원 배열</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // 자바스크립트에는 다차원배열이 없다. [가변배열]이 있다.
                                    function Matrix(rows, columns) {
                                        var jaggedarray = new Array(rows);
                                        for (var i = 0; i < columns; i+=1) {
                                            jaggedarray[i] = new Array(rows);
                                        }
                                        return jaggedarray;
                                    }
                                    console.log(Matrix(3,3));

                                    // 3x3 Matrix
                                    var matrix3by3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
                                    matrix3by3[0] = [1, 2, 3];
                                    matrix3by3[1] = [4, 5, 6];
                                    matrix3by3[2] = [7, 8, 9];

                                    matrix3by3[0][0];   // 1
                                    matrix3by3[0][1];   // 2
                                    matrix3by3[0][2];   // 3

                                    matrix3by3[1][0];   // 4
                                    matrix3by3[2][1];   // 5
                                    matrix3by3[3][2];   // 6

                                    matrix3by3[2][0];   // 7
                                    matrix3by3[2][1];   // 8
                                    matrix3by3[2][2];   // 9

                                    // matrix[a][b] => a:행(row), b:열(column)
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">나선형으로 출력</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    var M = [
                                        [ 1,  2,  3,  4,  5],
                                        [ 6,  7,  8,  9, 10],
                                        [11, 12, 13, 14, 15],
                                        [16, 17, 18, 19, 20]
                                    ];

                                    // 1 -> 5 -> 20 -> 16 -> 6 -> 9 -> 14 -> 12

                                    function spiralPrint(M) {
                                        var topRow = 0,
                                            leftCol = 0,
                                            btmRow = M.length - 1,
                                            rightCol = M[0].length - 1;

                                        while (topRow < btmRow && leftCol < rightCol) {
                                            for (var col = 0; col <= rightCol; col++) {
                                                console.log(M[topRow][col]);
                                            }
                                            topRow++;

                                            for (var row = topRow; row <= btmRow; row++) {
                                                console.log(M[row][rightCol]);
                                            }
                                            rightCol--;

                                            if (topRow <= btmRow) {
                                                for (var col = rightCol; col >= 0; col--) {
                                                    console.log(M[btmRow][col]);
                                                }
                                                btmRow--;
                                            }
                                            if (leftCol <= rightCol) {
                                                for (var row = btmRow; row > topRow; row--) {
                                                    console.log(M[row][leftCol]);
                                                }
                                                leftCol++;
                                            }
                                        }
                                    }
                                    spiralPrint(M);
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">틱택토(tic-tac-toe) 게임</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // Example) X 승리
                                    // OX-
                                    // -XO
                                    // OX-
                                    // [[O, X, -], [-, X, O], [O, X, -]]

                                    // row(행)확인
                                    function checkRow(rowArr, letter) {
                                        for (var i = 0; i < 3; i++) {
                                            if (rowArr[i] != letter) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    }

                                    // column(열) 확인
                                    fuction checkColumn (gameBoardMatrix, columnIndex, letter) {
                                        for (var i = 0; i < 3; i++) {
                                            if (gameBoardMatrix[i][columnIndex] != letter) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    }

                                    // 대각선을 확인
                                    fuction ticTacToeWinner (gameBoardMatrix, letter) {
                                        // 행을 확인한다.
                                        var rowWin = checkRow(gameBoardMatrix[0], letter) || checkRow(gameBoardMatrix[1], letter) || checkRow(gameBoardMatrix[2], letter);

                                        // 열을 확인한다.
                                        var colWin = checkColumn(gameBoardMatrix, 0, letter) || checkColumn(gameBoardMatrix, 1, letter) || checkColumn(gameBoardMatrix, 2, letter);

                                        // 대각선을 확인한다.
                                        var diagonalWinLeftToRight = (gameBoardMatrix[0][0] == letter && gameBoardMatrix[1][1] == letter && gameBoardMatrix[2][2] == letter);
                                        var diagonalWinLRightoLeft = (gameBoardMatrix[0][2] == letter && gameBoardMatrix[1][1] == letter && gameBoardMatrix[2][0] == letter);

                                        return rowWin || colWin || diagonaWinLeftToRight || diagonalWinLRightoLeft;
                                    }

                                    var board = [['O', '-', 'X'], ['-', 'O', '-'], ['-', 'X', 'O']];
                                    ricTacToeWinner(board, 'X');  // false
                                    ricTacToeWinner(board, 'O');  // true
                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">길 찾기</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    // % e % % % % % % % % %
                                    // %  .   .   .  %  .  %  .   .   .  %
                                    // %  .  %  .  %  .  %  .  % % %
                                    // %  .  %  .   .   .   .   .   .   .  %
                                    // %  .  % % % %  .  % %  .  %
                                    // %  .  %  .   .   .   .   .  %  .  %
                                    // % % % % % % % % %  x  %
                                    // 현재 위치가 x일 때 출구 e를 찾아라!

                                    var board = \`%e%%%%%%%%%\\n%...%.%...%\\n%.%.%.%.%%%\\n%.%.......%\\n%.%%%%.%%.%\\n%.%.....%.%\\n%%%%%%%%%x%\`;
                                    var rows = board.split("\\n");

                                    function generateColumnArr(arr) {
                                        return arr.split("");
                                    }
                                    var mazeMatrix = rows.map(generateColumnArr);
                                    
                                    function findChar(char, mazeMatrix) {
                                        var row = mazeMatrix.length,
                                            column = mazeMatrix[0].length;

                                        for (var i = 0; i < row; i++) {
                                            for (var j = 0; j < column; j++) {
                                                if (mazeMatrix[i][j] == char) {
                                                    return [i, j];
                                                }
                                            }
                                        }
                                    }

                                    function printMatrix(matrix) {
                                        var mazePrintStr = "",
                                            row = matrix.length,
                                            column = matrix[0].length;

                                        for (var i = 0; i < row; i++) {
                                            for (var j = 0; j < column; j++) {
                                                mazePrintStr += mazeMatrix[i][j];
                                            }
                                            mazePrintStr += "\\n";
                                        }
                                        console.log(mazePrintStr);
                                    }

                                    function mazePathFinder(mazeMatrix) {
                                        var row = mazeMatrix.length,
                                            column = mazeMatrix[0].length,
                                            startPos = findChar('e', mazeMatrix),
                                            endPos = findChar('x', mazeMatrix);

                                        path(startPos[0], startPos[1]);

                                        function path(x, y) {
                                            // 위쪽: path(x+1, y)
                                            // 오른쪽: path(x, y+1)
                                            // 아래쪽: path(x-1, y)
                                            // 왼쪽: path(x, y-1)

                                            if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
                                                return false;
                                            }
                                            // Found
                                            if (x == endPos[0] && y == endPos[1]) {
                                                return true;
                                            }
                                            if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
                                                return false;
                                            }
                                            // Mark the current spot
                                            mazeMatrix[x][y] = '+';
                                            printMatrix(mazeMatrix);

                                            if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
                                                return true;
                                            }
                                            mazeMatrix[x][y] = '.';
                                            return false;
                                        }
                                    }

                                    mazePathFinder(mazeMatrix);

                                `}
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="sec_code full_size">
                    <div className="code_bx">
                        <div className="code_title">행렬 회전</div>
                        <pre>
                            <code className="language-js">
                                {`
                                    var matrix = [[1, 0, 1], [0, 0, 1], [1, 1, 1]];

                                    function rotateMatrix90Left(mat) {
                                        var N = mat.length;
                                        
                                        // 항목들을 하나씩 처리한다.
                                        for (var x = 0; x < N / 2; x++) {
                                            // 현재 항목을 기준으로
                                            // 네 개의 항목들(상, 하, 좌, 우)을 처리한다.
                                            for (var y = x; y < N - x - 1; y++) {
                                                // 현재 칸의 값을 임시(temp) 변수에 저장한다.
                                                var temp = mat[x][y];

                                                // 현재 항목 기준 오른쪽 값을 현재 항목 기주 위쪽 칸에 할당한다.
                                                mat[x][y] = mat[y][N-1-x];

                                                // 현재 항목 기준 아래쪽 값을 현재 항목 기준 오른쪽 칸에 할당한다.
                                                mat[y][N-1-x] = mat[N-1-x][N-1-y];

                                                // 현재 항목 기준 왼쪽 값을 현재 항목 기준 아래쪽 칸에 할당한다.
                                                mat[N-1-x][N-1-y] = mat[N-1-y][x];

                                                // 임시 변수의 값을 현재 항목 기준 왼쪽 칸에 할당한다.
                                                mat[N-1-y][x] = temp;
                                            }
                                        }
                                    }
                                    rotateMatrix90Left(matrix);
                                    console.log(matrix);    // [[1, 1, 1], [0, 0, 1], [1, 0, 1]]
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