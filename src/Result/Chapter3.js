// Number.EPSLION
function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;    //math.abs 절대값 반환
}
numberEquals(0.1 + 0.2, 0.3);   //true


//최대치
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;            //true
Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022;    //false
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2;          //true
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022;  //true

//최소치
Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2;            //true
Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022;    //false
Number.MIN_VALUE - 1 == -1;     //true

//무한( Infinity, -Infinity )
Infinity > Number.MAX_SAFE_INTEGER;     //true
-Infinity < -Number.MAX_SAFE_INTEGER;   //true
-Infinity - 32323323 == -Infinity - 1;    //true

//크기순서
-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity;     //true

/* 참고 */
// Number.MAX_VALUE = 1.7976931348623157e+308
// Number.MIN_VALUE = 5e-324
// Number.MIN_SAFE_INTEGER = -9007199254740991


//숫자 알고리즘
//소수판별(n을 2부터 n-1까지의 수로 나눠 나머지가 0인지 확인한다.)
function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // 2부터 n-1까지의 수로 나눈다.
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

//소수판별(반복문을 n제곱근까지만 확인)
//n제곱근이 소수가 아니면 n은 수학 정의에 의해 소수가 아니다.
//위의 알고리즘 보다 시간복잡도가 많이 개선되었다.(최적화)
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    //입력된 수가 2 또는 3인 경우 아래 반복문에서
    //다섯 개의 숫자를 건너뛸 수 있다.
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}


//소인수분해
function primeFactors(n) {
    //n이 2로 나눠진다면 나눠질 수 있는 수만큼 2가 출력된다.
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }

    // 이 지점에서 n은 홀수임이 확실하다.
    // 따라서 수를 두 개씩 증가시킬 수 있다.(i = i + 2)
    for (var i = 3; i * i <= n; i = i + 2) {
        //i가 n을 나눌 수 있는 한 계속해서 i가 출력되고 n을 i로 나눈다.
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }
    // 다음 조건문은 n이 2보다 큰 소수인 경우를 처리하기 위한 것이다.
    if (n > 2) {
        console.log(n);
    }
}
primeFactors(10);   // 2와 5를 출력한다.


//무작위 수 생성기
Math.random() * 100;        // 0부터 100까지의 부동소수점
Math.random() * 25 + 5;     // 5부터 30까지의 부동소수점
Math.random() * 10 - 100;   // -100부터 -90까지의 부동소수점

Math.floor(Math.random() * 100);        // 0부터 99까지의 정수
Math.round(Math.random() * 25) + 5;     // 5부터 30까지의 정수
Math.ceil(Math.random() * 10) - 100;    // -100부터 -90까지의 정수

/* 참고 */
//두 값 사이의 난수 생성
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//두 값 사이의 난수 생성
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


//모듈러
function modularExponentiantion(base, exponent, moduls) {
    return Math.pow(base, exponent) % modulus;
}


//문제1: (x^y) % p를 계산하라. (x:기저, y:지수, p:모듈러)
//c % m = (ab) % m;
//c % m = [(a % m)(b % m)] % m;

// 1. 값 = 1로 설정한다. 현재 지수는 0이다.
// 2. 현재 지수를 1만큼 증가시킨다.
// 3. 현재 지수가 목표 지수가 될 때까지 '값 = (값 x 기저) mod 모듈러'로 설정한다.

//4^3 % 5 = 64 % 5 = 4
//value = (lastValue x base) % modulus;

function modularExponentiantion(base, exponent, modulus) {
    if (modulus) return 0;
    var value = 1;
    for (var i = 0; i < exponent; i++) {
        value = (balue * base) % modulus;
    }
    return value;
}

//문제2: n 보다 작은 소수를 출력하라.
function allPrimesLessThaN(n) {
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    //입력된 수가 2 또는 3인 경우 아래 반복문에서
    //다섯 개의 숫자를 건너뛸 수 있다.
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
allPrimesLessThaN(15);


//
function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor
    }
}
function isUgly(number) {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}

function arrayNUglyNumber(n) {
    var counter = 0;
    var currentNumber = 1;
    var uglyNumbers = [];

    while (counter != n) {
        if (isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }
        currentNumber++;
    }
    return uglyNumbers;
}