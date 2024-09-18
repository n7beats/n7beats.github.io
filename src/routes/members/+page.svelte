<script lang="ts">
	import type { PageData } from './$types';
	import Member from './Member.svelte';

	export let data: PageData;
</script>

<main>
	<h1>
		<a href="/">&lt;</a>
		Membres
	</h1>

	{#if data.data}
		<h2>Bureau actuel</h2>
		<section class="board">
			{#each data.data.group.board as membership}
				<Member {membership} />
			{/each}
		</section>

		{#each data.membersByYear as [year, members]}
			<h2>{year}</h2>
			<section class="members">
				{#each members as membership}
					<Member {membership} />
				{/each}
			</section>
		{/each}
	{/if}
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
	}
</style>
