import { IAuthor, IComment } from "src/types/types";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

export function sortCommentsById(comments: IComment[]) {
    return comments.sort((a, b) => a.id - b.id)
}

export async function findAuthor(comment: IComment) {
    return await getAuthorsRequest()
        .then(res => res.find((author: IAuthor) => author.id === comment.author))
}

export function getFormattedDate(date: string) {
    
    function determineEnding(hours: number) {
        let ending;
        if (hours === 1) {
            ending = 'час';
        } else if (hours >= 2 && hours <= 4) {
            ending = 'часа';
        } else {
            ending = 'часов';
        }
        return ending;
    }

    const hoursAgo = new Date().getHours() - new Date(date).getHours();

    if (hoursAgo > 0 && hoursAgo < 6) {
        return `${hoursAgo} ${determineEnding(hoursAgo)} назад`
    }

    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, "0");
    const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const year = newDate.getFullYear().toString();
    const hours = newDate.getHours().toString().padStart(2, "0");
    const minutes = newDate.getMinutes().toString().padStart(2, "0");
    const seconds = newDate.getSeconds().toString().padStart(2, "0");


    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
}