import axios from 'axios';
import type { Post } from '../../../../types';
export async function load({params}) {
	const getPosts = async (): Promise<Post> => {
		const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
		const res = await axios.get<Post>(url);
		return res.data;
	};
	return {
		post: await getPosts()
	};
}
