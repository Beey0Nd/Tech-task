import classes from "./DownloadButton.module.css"

interface Props {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    totalPages: number,
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function DownloadButton({page, setPage, totalPages, error, setError, setLoading}: Props) {

    function handleClick() {
        setLoading(true)
        setError(false)
        if(page < 3) {
            setPage(prev => prev + 1)
        }
    }
    
    return (
        <button 
        style={{display: page >= totalPages ? "none" : "block"}}
        className={classes.downloadButton} onClick={handleClick}>{error ? "Возникла ошибка. Попробуйте еще раз." : "Загрузить еще"}</button>
    );
}

export default DownloadButton;