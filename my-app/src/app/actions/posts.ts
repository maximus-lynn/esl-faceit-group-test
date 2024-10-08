"use server";

import { IPost } from "@/components/Post";

interface IPosts {
  limit: number;
  skip: number;
  posts: IPost[];
}

export interface IUser {
  image: string;
  firstName: string;
  lastName: string;
}

export async function getPosts(skip: number): Promise<IPosts | undefined> {
  try {
    const response = await fetch(
      `https://dummyjson.com/posts?limit=10&skip=${skip}&select=title,reactions,id,body,userId`
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Error Fetching Data", error);
    return undefined;
  }
}

export async function getUser(userId: number): Promise<IUser> {
  const user = await fetch(`https://dummyjson.com/users/${userId}`);
  const res = await user.json();

  return res;
}
