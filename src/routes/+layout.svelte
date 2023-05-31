<script>
	import HomeIcon from '$lib/components/HomeIcon.svelte';
	import './style.css';
</script>

<nav>
	<HomeIcon />
	<ul>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/search">Search</a>
		</li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		max-width: calc(var(--nav-width) + var(--gap) * 2);
		width: auto;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-family: 'Courier New', Courier, monospace;
		margin-inline-end: auto;
		margin-inline-start: auto;
		line-height: var(--header-height);
	}
	ul {
		display: flex;
		list-style: none;
		padding: 0;
	}
	li {
		padding: 0.5rem 0.75rem;
	}
	main {
		max-width: calc(var(--main-width) + var(--content-gap) * 2);
		margin-inline-end: auto;
		margin-inline-start: auto;
		font-family: 'Courier New', Courier, monospace;
	}

	:global(a:visited) {
		color: inherit;
	}

	:global(body) {
		background-color: #fff;
		color: #333;
		transition: background-color 0.3s;
	}
	:global(body.dark-mode) {
		background-color: #333;
		color: #fff;
	}
</style>
