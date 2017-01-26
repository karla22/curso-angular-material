export class Blogger {
    id: number;
    name: string;
    username: string;
    email: string;
    profilePictureURL: string;
    topics: string[];
    posts: Post[];
}

export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}