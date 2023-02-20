import {Spin} from "antd";
import React from "react";
import {useRequest} from "ahooks";
import {articleList, ArticleListItem} from "../service/github";
import {NavLink} from "react-router-dom";

const ArticleList: React.FC<{ articles?: ArticleListItem[] }> = (props) => {
    return (<div className="article-list">
        {props.articles?.map((art => <div key={art.id} className="article-item">
            <NavLink to={`/detail/${art.id}`}>
                <div className="title">{art.title}</div>
                <div className="info">{art.time}</div>
            </NavLink>
        </div>))}
    </div>)
}
const Index: React.FC = () => {
    const {data, loading} = useRequest(articleList, {cacheKey: 'article-list'})

    return (<div className="articles">
        {loading ? <Spin/> : <ArticleList articles={data}/>}
    </div>)
}
export default Index;