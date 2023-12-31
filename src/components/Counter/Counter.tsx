import { ReactElement, useState, useEffect } from "react";
import heart from "../../assets/icons/hollow-heart.svg"
import { IComment } from "src/types/types";
import classes from "./Counter.module.css"

interface Props {
    comments: IComment[],
    likesCounter: number,
    setLikesCounter: React.Dispatch<React.SetStateAction<number>>,
    addedLikesRef: React.MutableRefObject<number>
}

function Counter({ comments, likesCounter, setLikesCounter, addedLikesRef }: Props): ReactElement {
    const [commentsCounter, setCommentsCounter] = useState<number>(0)

    useEffect(() => {
        setCommentsCounter(comments.length)

        const likes = comments.reduce((prev: number, curr: IComment) => prev + curr.likes, 0)
        setLikesCounter(likes + addedLikesRef.current)
    }, [comments])

    return (
        <div className={classes.counter}>
            <p>{commentsCounter} комментариев</p>
            <p className={classes.likes}><img src={heart} alt="hollow heart" />{likesCounter}</p>
        </div>
    );
}

export default Counter;