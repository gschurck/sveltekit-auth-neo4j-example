import {SvelteKitAuth} from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import {GITHUB_ID, GITHUB_SECRET, NEO4J_PASSWORD, NEO4J_URI, NEO4J_USER} from "$env/static/private"
import neo4j from "neo4j-driver"
import {Neo4jAdapter} from "@next-auth/neo4j-adapter"

const driver = neo4j.driver(
    NEO4J_URI,
    neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
)

const neo4jSession = driver.session()
export const handle = SvelteKitAuth({
    // @ts-ignore
    providers: [GitHub({clientId: GITHUB_ID, clientSecret: GITHUB_SECRET})],
    adapter: Neo4jAdapter(neo4jSession),
})
