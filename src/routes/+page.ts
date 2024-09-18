import { PUBLIC_CHURROS_GROUP_UID } from '$env/static/public';
import { client, gql } from '$lib/graphql';

export async function load() {
	return client
		.query(
			gql(`
            query n7beats_homepage($n7beatsUID: String!) {
                group(uid: $n7beatsUID) {
                    name
                    shortDescription
                    longDescriptionHtml
                    pictureURL
                    links {
                        text, url
                    }
                }
            }
        `),
			{
				n7beatsUID: PUBLIC_CHURROS_GROUP_UID
			}
		)
		.toPromise();
}
