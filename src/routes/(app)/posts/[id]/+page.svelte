<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	
</script>

<h1>Post {data.post.id}</h1>
<p style="text-align: center;">
	{data.post.body}
</p>
