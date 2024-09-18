<script lang="ts">
	import type { PageData } from './$types';

	export let membership: NonNullable<PageData['data']>['group']['members'][number];
	$: ({ title, member } = membership);

	$: spotify = member.links.find(
		({ url }) => url && new URL(url).hostname === 'open.spotify.com'
	)?.url;
	$: youtube = member.links.find(({ url }) => url && new URL(url).hostname === 'youtube.com')?.url;
	$: applemusic = member.links.find(
		({ url }) => url && new URL(url).hostname === 'music.apple.com'
	)?.url;
	$: instagram = member.links.find(
		({ url }) => url && new URL(url).hostname === 'instagram.com'
	)?.url;
</script>

<a class="article-link" href="https://churros.inpt.fr/{member.uid}">
	<article>
		<img src={member.pictureURL} alt={member.uid} class="profilepic" />
		<div class="text">
			<div class="name">
				{member.firstName}
				{member.lastName}

				{#if title != 'Membre'}
					<span class="title">{title}</span>
				{/if}
			</div>
			<div class="links">
				{#if spotify}
					<a href={spotify}>Spotify</a>
				{/if}
				{#if youtube}
					<a href={youtube}>YouTube</a>
				{/if}
				{#if applemusic}
					<a href={applemusic}>Apple Music</a>
				{/if}
				{#if instagram}
					<a href={instagram}>Instagram</a>
				{/if}
			</div>
		</div>
	</article>
</a>

<style>
	a.article-link {
		color: black;
		text-decoration: none;
		display: inline-block;
	}
	article {
		display: inline-flex;
		gap: 0.5em;
		font-size: 1.3em;
	}
	article img {
		height: 1.2em;
		width: 1.2em;
		overflow: hidden;
		border-radius: 10000px;
		object-fit: cover;
		color: transparent;
		background: var(--primary);
        flex-shrink: 0;
	}
	.text {
		display: flex;
		flex-direction: column;
		line-height: 1;
        row-gap: 0.25em;
        flex-wrap: wrap;
	}
    .links {
        display: flex;
        gap: 0.25em 0.5em;
        flex-wrap: wrap;
    }
	.text .title {
		color: gray;
		font-size: 0.8em;
	}
</style>
