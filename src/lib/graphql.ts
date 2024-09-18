import { initGraphQLTada } from 'gql.tada';
import type { introspection } from '../graphql-env';
import { cacheExchange, Client, fetchExchange } from '@urql/svelte';

export const gql = initGraphQLTada<{
	introspection: introspection;
	scalars: {
		DateTime: string;
		UID: string;
		LocalID: string;
		URL: string;
		HTML: string;
		Color: string;
	};
}>();

export const client = new Client({
	url: 'https://churros.inpt.fr/graphql',
	exchanges: [cacheExchange, fetchExchange]
});
