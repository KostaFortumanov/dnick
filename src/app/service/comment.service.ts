import {Injectable} from '@angular/core';
import {Comment} from "../model/comment";

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor() {
    }

    getComments(id: number): Comment[] {
        return [
            {
                from: 'Kosta Fortumanov',
                date: '12/11/2012 20:00',
                content: 'You can do it like this<br><br><app-non-editable>let x = 5;<br></bt>if(x  > 5) {<br>  console.log(x);<br>}</app-non-editable><br>Good luck',
                replies: [
                    {
                        from: 'Kosta Fortumanov',
                        date: '12/11/2012 20:00',
                        content: 'You can do it like this<br><br><app-non-editable>let x = 5;<br></bt>if(x  > 5) {<br>  console.log(x);<br>}</app-non-editable><br>Good luck',
                        replies: [],
                        likes: 24,
                        isLiked: true,
                        isDisliked: false
                    },
                    {
                        from: 'Kosta Fortumanov',
                        date: '12/11/2012 20:00',
                        content: 'You can do it like this<br><br><app-non-editable>let x = 5;<br></bt>if(x  > 5) {<br>  console.log(x);<br>}</app-non-editable><br>Good luck',
                        replies: [],
                        likes: 24,
                        isLiked: true,
                        isDisliked: false
                    }
                ],
                likes: 24,
                isLiked: true,
                isDisliked: false
            }
        ]
    }
}
