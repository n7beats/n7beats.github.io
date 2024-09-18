<script lang="ts">
	import { PUBLIC_CHURROS_GROUP_UID } from '$env/static/public';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	{#if data.error}
		<h1>Ooops!</h1>
		<p>{data.error.message}</p>
	{:else if data.data}
		{@const { name, shortDescription, longDescriptionHtml, links, pictureURL } = data.data.group}
		<header>
			<img src={pictureURL} alt="n7beats logo" />
			<h1>{name}</h1>
			<p>{shortDescription}</p>
			<a href="https://churros.inpt.fr/{PUBLIC_CHURROS_GROUP_UID}" class="button">Rejoins-nous!</a>
		</header>
		<section class="description">
			{@html longDescriptionHtml}
		</section>
		<ul class="links">
			<li>
				<a href="/members">membres</a>
			</li>
			{#each links as { url, text }}
				{#if url && new URL(url).hostname !== 'n7beats.org'}
					<li>
						<a href={url?.toString() ?? ''}>{text}</a>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		row-gap: 3rem;
		padding: 2rem;
	}

	h1 {
		font-size: 5em;
		line-height: 1;
	}

	header img {
		inline-size: 5rem;
	}

	header a {
		margin-top: 1rem;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul.links {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em 1em;
		justify-content: center;
		align-items: center;
		padding-left: 0;
	}

	.description {
		max-width: 500px;
	}

	.description :global(p:not(:last-child)) {
		margin-bottom: 1em;
	}

	a.button {
		display: inline-block;
		text-decoration: none;
		padding: 0.5em 1em;
		background: var(--primary);
		color: var(--text);
	}
</style>
