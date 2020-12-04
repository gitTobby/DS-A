// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import menuList from './db_menu';

const ChapterList = () => {
    const menuList = [
        { inx: '1', name: 'Chapter1', text: '1. 빅오표기법' },
        { inx: '2', name: 'Chapter2', text: '2. 자바스크립트의 독특한 특징' },
        { inx: '3', name: 'Chapter3', text: '3. 자바스크립트 숫자' },
        { inx: '4', name: 'Chapter4', text: '4. 자바스크립트 문자열' },
        { inx: '5', name: 'Chapter5', text: '5. 자바스크립트 배열' },
        { inx: '6', name: 'Chapter6', text: '6. 자바스크립트 객체' },
        /*
        { inx: '7', name: 'Chapter7', text: '7. 자바스크립트 메모리 관리' },
        { inx: '8', name: 'Chapter8', text: '8. 재귀' },
        { inx: '9', name: 'Chapter9', text: '9. 집합' },
        { inx: '10', name: 'Chapter10', text: '10. 검색과 정렬' },
        { inx: '11', name: 'Chapter11', text: '11. 해시 테이블' },
        { inx: '12', name: 'Chapter12', text: '12. 스택과 큐' },
        { inx: '13', name: 'Chapter13', text: '13. 연결 테스트' },
        { inx: '14', name: 'Chapter14', text: '14. 캐싱' },
        { inx: '15', name: 'Chapter15', text: '15. 트리' },
        { inx: '16', name: 'Chapter16', text: '16. 힙' },
        { inx: '17', name: 'Chapter17', text: '17. 그래프' },
        { inx: '18', name: 'Chapter18', text: '18. 고급 문자열' },
        { inx: '19', name: 'Chapter19', text: '19. 동적 프로그래밍' },
        { inx: '20', name: 'Chapter20', text: '20. 비트조직' },
        */
    ];

    const [isActive, setActive] = useState('1');

    const handleToggle = (a) => {
        console.log(a);
        setActive(a);
    };

    return (
        <ul>
            {
                menuList.map(menuAttr => (
                    <li className={`${isActive === menuAttr.inx ? "selected" : ""}`}>
                        <Link to={menuAttr.name} onClick={() => handleToggle(menuAttr.inx)} >{menuAttr.text}</Link>
                    </li>
                    )
                )
            }
        </ul>
    );
}

export default ChapterList;