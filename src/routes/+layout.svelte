<script lang="ts">
	import { client } from '$lib/graphql';
	import { setContextClient } from '@urql/svelte';
	import type { PageData } from './$types';

	setContextClient(client);
	export let data: PageData;
</script>

<slot></slot>

{@html `<style>:root{ --primary: ${data.group?.color ?? 'magenta'} }</style>`}

<style>
	:root {
		font-family:
			Bricolage Grotesque,
			sans-serif;
		--text: white;
	}

	:global(a) {
		color: var(--primary);
	}
	:global(h1, h2) {
		color: var(--primary);
	}
</style>
