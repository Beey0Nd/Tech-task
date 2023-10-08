import { ReactElement, useState, useEffect } from "react";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import heart from "../../assets/icons/hollow-heart.svg"
import { IComment } from "src/types/types";
import classes from "./Counter.module.css"

interface Props {
    comments: IComment[]
}

function Counter({ comments }: Props): ReactElement {
    const [commentsCounter, setCommentsCounter] = useState(0)
    const [likesCounter, setLikesCounter] = useState(0)

    useEffect(() => {
        setCommentsCounter(comments.length)

        const likes = comments.reduce((prev: number, curr: IComment) => prev + curr.likes, 0)
        setLikesCounter(likes)
    }, [comments])

    return (
        <div className={classes.counter}>
            <p>{commentsCounter} комментариев</p>
            <p className={classes.likes}><img src={heart} alt="hollow heart" />{likesCounter}</p>
        </div>
    );
}

export default Counter;