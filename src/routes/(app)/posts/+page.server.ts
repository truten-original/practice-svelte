import axios from 'axios';
import type { Post } from '../../../types';
export async function load() {
	const getPosts = async (): Promise<Post[]> => {
		const url = 'https://jsonplaceholder.typicode.com/posts';
		const res = await axios.get<Post[]>(url);
		return res.data;
	};
	return {
		posts: await getPosts()
	};
}
