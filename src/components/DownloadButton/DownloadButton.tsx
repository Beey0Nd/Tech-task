import { useEffect, useState } from "react";
import getCommentsRequest from "src/api/comments/getCommentsRequest";
import classes from "./DownloadButton.module.css"

interface Props {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

function DownloadButton({page, setPage}: Props) {
    const [maxPages, setMaxPages] = useState(0)

    useEffect(() => {
        // getCommentsRequest()
    }, [])

    function handleClick() {
        if(page < 3) {
            setPage(prev => prev + 1)
        }
    }

    return (
        <button className={classes.downloadButton} onClick={handleClick}>Загрузить еще</button>
    );
}

export default DownloadButton;