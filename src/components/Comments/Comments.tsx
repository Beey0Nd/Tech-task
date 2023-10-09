import Comment from "../Comment/Comment"
import { IComment } from "src/types/types"
import classes from "./Comments.module.css"

interface Props {
    comments: IComment[],
    setLikesCounter: React.Dispatch<React.SetStateAction<number>>,
    addedLikesRef: React.MutableRefObject<number>
}

function Comments({ comments, setLikesCounter, addedLikesRef }: Props) {
    return (
        <>
            <ul className={classes.comments}>
                {
                    comments.map(comment => (
                        <Comment
                        addedLikesRef={addedLikesRef} 
                        setLikesCounter={setLikesCounter} key={comment.id} comment={comment} />
                    ))
                }
            </ul>
        </>
    );
}

export default Comments;