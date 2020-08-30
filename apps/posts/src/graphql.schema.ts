
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Post {
    id: string;
    title: string;
    body: string;
    user_id?: string;
    user?: User;
}

export interface IQuery {
    getPosts(): Post[] | Promise<Post[]>;
}

export interface User {
    id: string;
    posts?: Post[];
}
