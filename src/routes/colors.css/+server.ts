import { PUBLIC_CHURROS_GROUP_UID } from '$env/static/public';
import { client, gql } from '$lib/graphql.js';
import { text } from '@sveltejs/kit';

export async function GET(event) {
	const data = await client
		.query(gql(`query n7beats_colors($uid: String!){group(uid: $uid) { color }}`), {
			uid: PUBLIC_CHURROS_GROUP_UID
		})
		.toPromise();

	return text(
		`
        :root {
            --primary: ${data.data?.group.color ?? 'blue'} 
        }        
`,
		{
			headers: {
				'Content-Type': 'text/css'
			}
		}
	);
}
