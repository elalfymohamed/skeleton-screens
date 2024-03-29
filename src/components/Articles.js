import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts`
            );
            const data = await res.json();
            return setArticles(data);
        }, 5000);
    }, [articles]);
    return (
        <div className="articles">
            <h2>Article</h2>
            {articles &&
                articles.map((article) => (
                    <div className="article" key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))}
            {!articles &&
                [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
        </div>
    );
};

export default Articles;
