import { PUBLIC_CHURROS_GROUP_UID } from '$env/static/public';
import { client, gql } from '$lib/graphql';

export const prerender = true;
export const trailingSlash = 'always';

export async function load() {
	return client
		.query(
			gql(`
            query n7beats_root_layout($uid: String!) {
                group(uid: $uid) {
                    color
                }
            }
        `),
			{
				uid: PUBLIC_CHURROS_GROUP_UID
			}
		)
		.toPromise()
		.then((d) => d.data);
}
