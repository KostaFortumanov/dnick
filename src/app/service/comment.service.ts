import {Injectable} from '@angular/core';
import {Comment} from "../model/comment";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    comments =  [
        {
            id: 1,
            from: 'Kosta Fortumanov',
            date: '04/25/2022 20:00',
            content: '<app-non-editable>function rotLeft(a, d) {<br>    var arr = [];<br>    for (var i = 0; i <  a.length; i++) {<br>        arr.push(a[i]);<br>    };<br>    for (var j = 1; j < = d; j++) {<br>        arr.shift(arr.push(arr[0]));<br>    }<br>    return arr;<br>}</app-non-editable>',
            replies: [
                {
                    id: 2,
                    from: 'Kostadin Fortumanov',
                    date: '04/25/2022 20:00',
                    content: 'You really don\'t need two loops. To rotate left n places:<br><app-non-editable>function rotLeft(arr, n) {<br>  return arr.map(() = > {<br>    if (n === arr.length) {<br>      n = 0;<br>    }<br>        <br>    return arr[n++];<br>  });<br>}</app-non-editable>',
                    replies: [],
                    likes: 24,
                    isLiked: true,
                    isDisliked: false
                }],
            likes: 14,
            isLiked: true,
            isDisliked: false
        },
        {
            id: 3,
            from: 'John Doe',
            date: '04/25/2022 20:00',
            content: '<app-non-editable>function rotLeft(a, d) {<br>  return [...a.slice(d - a.length), ...a.slice(0, d - a.length)]<br>}</app-non-editable>',
            replies: [
                {
                    id: 4,
                    from: 'Jane Doe',
                    date: '04/25/2022 20:00',
                    content: 'This version will be faster<br><app-non-editable>() - ; a.slice(d - a.length).concat(a.slice(0, d - a.length))</app-non-editable>',
                    replies: [],
                    likes: 7,
                    isLiked: true,
                    isDisliked: false
                }
            ],
            likes: 13,
            isLiked: false,
            isDisliked: true
        }
    ]

    constructor() {
    }

    getComments(id: number): Comment[] {
        return this.comments
    }
}
