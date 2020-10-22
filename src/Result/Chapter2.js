//객체는 동일함에도(동일한 속성과 값을 지님) 두 객체는 동일하지 않다.
//두 변수의 메모리상 주소가 다르기 때문이다.
var o1 = {};
var o2 = {};

o1 == o2    //false
o1 === o2    //false


//타입까지 등가를 확인하는 로직
function isEquivalent(a, b) {
    //속성 이름 배열
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    //속성 길이가 다른 경우 두 객체는 다른 객체다.
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        //속성 값이 다른 경우 두 객체는 같지 않다.
        if (a[propName] != b[propName]) {
            return false;
        }
    }

    //모든 것이 일치하면 두 객체는 일치한다.
    return true;
}
isEquivalent(
    {'hi' : 12},
    {'hi' : 12}
);

//isEquivalent 함수는 문자열이나 숫자 하나만을 속성으로 갖는 객체에 대해서도 잘 동작한다.
var obj1 = {
    'prop1' : 'test',
    'prop2' : function () {}
}
var obj2 = {
    'prop1' : 'test',
    'prop2' : function () {}
}
isEquivalent(obj1, obj2);   //false


var function1 = function () {
    console.log(2);
}
var function2 = function () {
    console.log(2);
}
console.log(function1 == function2);  //false



//type 확인을 위해서 typeof를 사용해 원하는 type가 맞는지 검증할 수 있다.
//마지막으로 등가 확인을 위해 값에 대해서는 ==를 사용하고 값과 type이 모두 같은지 확인하기 위해서는 ===를 사용하자.
//==와 === 연산자는 숫자, 문자열, 불리언과 같은 비객체형에만 사용할 수 있다.