import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? "" : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=c05643a105904d4f8b55277f5e3a7a7b`
        );
    }, [category]);

    // 대기중일때
    if (loading) {
        return <NewsListBlock> 대기중 ... </NewsListBlock>;
    }
    // 아직 response값이 설정되지 않았을 때
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>에러 발생</NewsListBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((item) => (
                <NewsItem article={item} key={item.url} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;