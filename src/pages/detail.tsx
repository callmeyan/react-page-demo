import React from "react";
import {useRequest} from "ahooks";
import {articleDetail} from "../service/github";
import {Button, Spin} from "antd";
import {useNavigate, useParams} from "react-router-dom";

const Detail: React.FC = () => {
    const params = useParams<{ id: string }>();
    const nav = useNavigate()
    const {data, loading, error} = useRequest(() => {
        if (!params.id) throw new Error('param error')
        return articleDetail(params.id)
    })
    return (<div className="articles">
        {error ? (<h1>Error:{error.message}</h1>) : (
            loading ? <Spin/> : <div>
                <div className="content">{data?.content}</div>
                <div className="back"><Button onClick={() => nav(-1)}>Back</Button></div>
            </div>
        )}
    </div>)
}
export default Detail;