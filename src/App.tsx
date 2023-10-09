import { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter/Counter";
import Comments from "./components/Comments/Comments";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import { sortCommentsById } from "./lib/utils";
import { IComment } from "./types/types";
import "./App.css";

function App() {
    const [page, setPage] = useState<number>(1)
    const [comments, setComments] = useState<IComment[]>([])
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)
    const [likesCounter, setLikesCounter] = useState<number>(0)
    const [totalPages, setTotalPages] = useState<number>(0);
    const addedLikesRef = useRef(0)

    useEffect(() => {
        getCommentsRequest(page)
        .then(res => {
            setTotalPages(res.pagination.total_pages)
        })
    }, [])

    useEffect(() => {
        if(!error) {
            getCommentsRequest(page)
            .then(res => {
                setComments(prev => [...prev, ...sortCommentsById(res.data)])
                setLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setLoading(false)
                setError(true)
                setPage(prev => prev - 1)
            })
        }
        
    }, [page])


    return (
        <>
            <Counter 
            addedLikesRef={addedLikesRef} likesCounter={likesCounter} 
            setLikesCounter={setLikesCounter} comments={comments} />
            <Comments 
            loading={loading}
            addedLikesRef={addedLikesRef} setLikesCounter={setLikesCounter} 
            comments={comments} />
            <DownloadButton 
            setLoading={setLoading}
            error={error} setError={setError}
            totalPages={totalPages} page={page} setPage={setPage} />
        </>
    );
}

export default App;
