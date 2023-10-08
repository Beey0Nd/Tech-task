import { IComment } from "src/types/types"
import classes from "./Comments.module.css"
import Comment from "../Comment/Comment"

interface Props {
    comments: IComment[]
}

function Comments({ comments }: Props) {
    return (
        <>
            <ul className={classes.comments}>
                {
                    comments.map(comment => (
                        <Comment key={comment.id} comment={comment} />
                    ))
                }
            </ul>
        </>
    );
}

export default Comments;