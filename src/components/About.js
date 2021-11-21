import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";

const About = () => {
    const { search } = useLocation();
    const query = qs.parse(search, {
        ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ? 를 생략한다.
    });
    const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열이다.

    return (
        <>
            <h1>About</h1>
            <p>리액트 라우터 테스트</p>
            {showDetail && <p>detail 값을 true로 설정.</p>}
        </>
    );
};

export default About;
