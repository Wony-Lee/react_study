import React from "react";
import Categories from "../components/Cateogories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
    // 카테고리가 선택되지 않으면 기본 값 all 로 사용,
    const match = useParams();
    const category = match.category || "all";
    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;
