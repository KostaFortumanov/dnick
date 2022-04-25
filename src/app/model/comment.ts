export interface Comment {
    from: string,
    date: string,
    content: string,
    replies: Comment[],
    likes: number,
    isLiked: boolean,
    isDisliked: boolean,
}
