import { PUBLIC_CHURROS_GROUP_UID } from '$env/static/public';
import { client, gql } from '$lib/graphql.js';
import groupBy from 'lodash.groupby';

export async function load(event) {
	return client
		.query(
			gql(
				`
    query n7beats_members($uid: String!) {
        group(uid: $uid) {
            board: boardMembers {
                title, member {
                    firstName, lastName, nickname, pictureURL, uid, 
                    links {
                        url
                    }
                }
            }
            members {
                createdAt
                title, member {
                    firstName, lastName, nickname, pictureURL, uid, 
                    links {
                        url
                    }
                }
            }
        }
    }
        `
			),
			{
				uid: PUBLIC_CHURROS_GROUP_UID
			}
		)
		.toPromise()
		.then((d) => ({
			...d,
			membersByYear: d.data
				? Object.entries(
						groupBy(d.data.group.members, (m) => new Date(m.createdAt).getFullYear())
					).toSorted(([y1], [y2]) => Number(y2) - Number(y1))
				: []
		}));
}
