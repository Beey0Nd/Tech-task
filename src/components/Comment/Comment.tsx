import { useState, useEffect } from "react"
import hollowRedHeart from "../../assets/icons/hollow-red-heart.svg"
import filledRedHeart from "../../assets/icons/filled-red-heart.svg";
import { findAuthor, getFormattedDate } from "src/lib/utils";
import { IComment } from "src/types/types";
import classes from "./Comment.module.css"

interface Props {
    comment: IComment,
    setLikesCounter: React.Dispatch<React.SetStateAction<number>>,
    addedLikesRef: React.MutableRefObject<number>
}

function Comment({ comment, setLikesCounter, addedLikesRef }: Props) {
    const [authorName, setAuthorName] = useState("")
    const [authorImage, setAuthorImage] = useState("")
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(comment.likes)

    useEffect(() => {
        findAuthor(comment).then(res => {
            setAuthorName(res.name)
            setAuthorImage(res.avatar)
        })
    }, [])

    const handleLike = () => {
        setLiked(prev => !prev)
        
        if(!liked) {
            setLikes(prev => prev + 1)
            setLikesCounter(prev => prev + 1)
            addedLikesRef.current += 1    
        } else {
            setLikes(prev => prev - 1)
            setLikesCounter(prev => prev - 1)
            addedLikesRef.current -= 1
        }
    }
    

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
                    <p className={classes.name}>{authorName}</p>
                    <p className={classes.time}>{getFormattedDate(comment.created)}</p>
                </div>
                <p 
                onClick={handleLike}
                className={classes.likes}>{likes}
                {
                    liked ? <img src={filledRedHeart} alt="hollow red heart" /> : <img src={hollowRedHeart} alt="hollow red heart" />
                }</p>
            </div>
            <p className={classes.text}>{comment.text}</p>
        </li>
    );
}

export default Comment;