import "./App.css";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import Comments from "./components/Comments/Comments";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import {  IComment } from "./types/types";
import { sortCommentsById, sortCommentsTimeAdded } from "./lib/utils";

function App() {
    const [page, setPage] = useState(1)
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        console.log(comments);
       getCommentsRequest(page).then(res => setComments(prev => [...prev, ...sortCommentsById(sortCommentsTimeAdded(res.data))]))
    }, [page])


    return (
        <>
            <Counter comments={comments}/>
            <Comments comments={comments}/>
            <DownloadButton page={page} setPage={setPage}/>
        </>
    );
}

export default App;
