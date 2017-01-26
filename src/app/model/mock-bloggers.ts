import { Blogger } from './Blogger';

export const BLOGGERS: Blogger[] = [
    {
        id: 1,
        name: 'Roberto Perez',
        username: 'roberto.perez',
        email: 'roberto@perez.com',
        topics:[],
        posts:[
            {
                userId: 1,
                id: 1,
                title: 'First Post',
                body: 'This is the content of first post'
            }
        ]
    },
    {
        id: 2,
        name: 'Karen Lopez',
        username: 'karen.lopez',
        email: 'karen@lopez.com',
        topics:[],
        posts:[]
    }
];
