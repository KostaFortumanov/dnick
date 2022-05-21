export interface Comment {
    id: number,
    from: string,
    commentDate: string,
    content: string,
    replies: Comment[],
    likes: number,
    isLiked: boolean,
    isDisliked: boolean,
}
