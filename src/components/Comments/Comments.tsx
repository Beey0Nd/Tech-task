import Comment from "../Comment/Comment"
import { IComment } from "src/types/types"
import classes from "./Comments.module.css"
import Loading from "../Loading/Loading";

interface Props {
    comments: IComment[],
    setLikesCounter: React.Dispatch<React.SetStateAction<number>>,
    addedLikesRef: React.MutableRefObject<number>,
    loading: boolean
}

function Comments({ comments, setLikesCounter, addedLikesRef, loading }: Props) {
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
                {
                    loading && <Loading/>
                }
            </ul>
        </>
    );
}

export default Comments;