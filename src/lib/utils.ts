import { IAuthor, IComment } from "src/types/types";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

export function sortCommentsById(comments: IComment[]) {
    return comments.sort((a, b) => a.id - b.id)
}

export function sortCommentsTimeAdded(comments: IComment[]) {
    return comments.sort((a, b) => {
        return new Date(b.created).valueOf() - new Date(a.created).valueOf();
    })
}

// export function sortCommentsByParent(comments: IComment[]) {
//     comments
// }

export async function findAuthorName(comment: IComment) {
    return await getAuthorsRequest()
        .then(res => res.find((author: IAuthor) => author.id === comment.author).name)
}

export async function findAuthorImage(comment: IComment) {
    return await getAuthorsRequest()
        .then(res => res.find((author: IAuthor) => author.id === comment.author).avatar)
}


export function getFormattedDate(date: string) {
    const hoursAgo = new Date().getHours() - new Date(date).getHours();

    if(hoursAgo > 0 && hoursAgo < 6) {
        return `${hoursAgo} часа назад`
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