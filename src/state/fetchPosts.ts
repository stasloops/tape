import { setGlobalState } from "./index";

export const getPosts = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setGlobalState('posts', data));
}