import { IComment } from "src/types/types";
import classes from "./Comment.module.css"
import { findAuthorName, findAuthorImage, getFormattedDate } from "src/lib/utils";
import hollowRedHeart from "../../assets/icons/hollow-red-heart.svg"
import { useState, useEffect } from "react"

interface Props {
    comment: IComment
}

function Comment({ comment }: Props) {
    const [author, setAuthor] = useState("")
    const [authorImage, setAuthorImage] = useState("")

    useEffect(() => {
        findAuthorName(comment).then(res => setAuthor(res))
        findAuthorImage(comment).then(res => setAuthorImage(res))
    }, [])

    return (
        <li className={comment.parent ? classes.shiftedComment : ""}
            key={comment.id}>
            <div className={classes.info}>
                <div className={classes.imageWrapper}>
                    {
                        authorImage && (
                            <img
                                className={classes.image}
                                src={authorImage}
                                alt="avatar" />
                        )
                    }
                </div>
                <div>
                    {author && <p className={classes.name}>{author}</p>}
                    <p className={classes.time}>{getFormattedDate(comment.created)}</p>
                </div>
                <p className={classes.likes}>{comment.likes} <img src={hollowRedHeart} alt="hollow red heart" /></p>
            </div>
            <p className={classes.text}>{comment.text}</p>
        </li>
    );
}

export default Comment;