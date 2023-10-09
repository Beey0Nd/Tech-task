import { IAuthor, IComment } from "src/types/types";
import getAuthorsRequest from "src/api/authors/getAuthorsRequest";

export function sortCommentsById(comments: IComment[]) {
    return comments.sort((a, b) => a.id - b.id)
}

export function sortCommentsByTimeAdded(comments: IComment[]) {
    return comments.sort((a, b) => {
        return new Date(b.created).valueOf() - new Date(a.created).valueOf();
    })
}

// export function sortCommentsByParent(comments: IComment[]) {
//     comments
// }

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

    if (hoursAgo > 0 && hoursAgo < 12) {
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


// [
//     {
//         id: 1,
//         created: subtractHours(today, 1).toISOString(),
//         parent: null
//     },
//     {
//         id: 13,
//         created: subtractHours(today, 3).toISOString(),
//         parent: null
//     },
//     {
//         id: 200,
//         created: "2021-07-04T14:44:01.038111+00:00",
//         parent: null
//     },
//     {
//         id: 2,
//         created: subtractHours(today, 6).toISOString(),
//         parent: null
//     },
//     {
//         id: 3,
//         created: subtractHours(today, 7).toISOString(),
//         parent: null
//     },
//     {
//         id: 204,
//         created: "2021-07-04T14:44:40.038111+00:00",
//         parent: 203
//     },

//     {
//         id: 206,
//         created: "2021-07-04T14:45:30.038111+00:00",
//         parent: 205
//     },
//     {
//         id: 207,
//         created: "2021-07-04T14:46:00.038111+00:00",
//         parent: 206
//     },
//     {
//         id: 201,
//         created: "2021-07-04T14:44:11.038111+00:00",
//         parent: 200
//     },
//     {
//         id: 203,
//         created: "2021-07-04T14:44:20.038111+00:00",
//         parent: 202
//     },
//     {
//         id: 202,
//         created: "2021-07-04T14:44:14.038111+00:00",
//         parent: 201
//     },
//     {
//         id: 205,
//         created: "2021-07-04T14:45:10.038111+00:00",
//         parent: 204
//     },
//     {
//         id: 4,
//         created: subtractHours(today, 8).toISOString(),
//         parent: null
//     },
// ]


// [
//     {
//         id: 1,
//         created: subtractHours(today, 1).toISOString(),
//         parent: null
//     },
//     {
//         id: 200,
//         created: "2021-07-04T14:44:01.038111+00:00",
//         parent: null
//     },
//     {
//         id: 201,
//         created: "2021-07-04T14:44:11.038111+00:00",
//         parent: 200
//     },
//     {
//         id: 202,
//         created: "2021-07-04T14:44:14.038111+00:00",
//         parent: 201
//     },
//     {
//         id: 203,
//         created: "2021-07-04T14:44:20.038111+00:00",
//         parent: 202
//     },
//     {
//         id: 204,
//         created: "2021-07-04T14:44:40.038111+00:00",
//         parent: 203
//     },
//     {
//         id: 205,
//         created: "2021-07-04T14:45:10.038111+00:00",
//         parent: 204
//     },
//     {
//         id: 206,
//         created: "2021-07-04T14:45:30.038111+00:00",
//         parent: 205
//     },
//     {
//         id: 207,
//         created: "2021-07-04T14:46:00.038111+00:00",
//         parent: 206
//     },
//     {
//         id: 13,
//         created: subtractHours(today, 3).toISOString(),
//         parent: null
//     },
//     {
//         id: 2,
//         created: subtractHours(today, 6).toISOString(),
//         parent: null
//     },
//     {
//         id: 3,
//         created: subtractHours(today, 7).toISOString(),
//         parent: null
//     },
//     {
//         id: 4,
//         created: subtractHours(today, 8).toISOString(),
//         parent: null
//     },
// ]