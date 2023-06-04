<script lang="ts">
	import axios from 'axios';
	import type { PageData } from './$types';
	export let data: PageData;
	const removePost = async (id: number) => {
		const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
		if (res.status === 200) {
			data.posts = data.posts.filter((p) => p.id !== id);
		}
	};
</script>

<h1>Posts</h1>
<div>
	{#each data.posts as post}
		<div class="post">
			<div class="post__content">
				<span>{post.id}.</span>
				<a href={`/posts/${post.id}`} class="post__description">{post.title}</a>
			</div>
			<button
				on:click={() => {
					removePost(post.id);
				}}
				class="post__btn">delete</button
			>
		</div>
	{/each}
</div>

<style lang="scss">
	.post {
		width: 800px;
		margin: 10px auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&__content {
			display: flex;
			column-gap: 5px;
			justify-content: flex-start;
			&__description {
				&:hover {
					color: aqua;
				}
			}
		}
		&__btn {
			padding: 5px 10px;
			color: #eee;
			background-color: red;
			border: none;
			border-radius: 8px;
			cursor: pointer;
		}
	}
</style>
