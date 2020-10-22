import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Chapter1 from "./Result/Chapter1";

const ChapterContent = () => {
    return (
        <Router>
            <Switch>
                <Route path="/Result" component={Chapter1}></Route>
            </Switch>
        </Router>

        // <div>
        //   <ol>
        //     <li><a href="#">1. 빅오표기볍</a></li>
        //     <li><a href="#">2. 자바스크립트의 독특한 특징</a></li>
        //     <li><a href="#">3. 자바스크립트 숫자</a></li>
        //     <li><a href="#">자바스크립트 문자열</a></li>
        //     <li><a href="#">5. 자바스크립트 배열</a></li>
        //     <li><a href="#">6. 자바스크립트 객체</a></li>
        //     <li><a href="#">7. 자바스크립트 메모리 관리</a></li>
        //     <li><a href="#">8. 재귀</a></li>
        //     <li><a href="#">9. 집합</a></li>
        //     <li><a href="#">10. 검색과 정렬</a></li>
        //     <li><a href="#">11. 해시 테이블</a></li>
        //     <li><a href="#">12. 스택과 큐</a></li>
        //     <li><a href="#">13. 연결 리스트</a></li>
        //     <li><a href="#">14. 캐싱</a></li>
        //     <li><a href="#">15. 트리</a></li>
        //     <li><a href="#">16. 힙</a></li>
        //     <li><a href="#">17. 그래프</a></li>
        //     <li><a href="#">18. 고급 문자열</a></li>
        //     <li><a href="#">19. 동적 프로그래밍</a></li>
        //     <li><a href="#">20. 비트조작</a></li>
        //   </ol>
        // </div>
    );
}

export default ChapterContent;