> Fork of the official SvelteKit Auth example for [Auth.js](https://sveltekit.authjs.dev)

<p align="center">
   <br/>
   <a href="https://authjs.dev" target="_blank">
   <img height="64" src="https://authjs.dev/img/logo/logo-sm.png" />
   </a>
   <a href="https://kit.svelte.dev" target="_blank">
   <img height="64" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" />
   </a>
    <a href="https://neo4j.com">
    <img height="64" src="https://dist.neo4j.com/wp-content/uploads/20210423072428/neo4j-logo-2020-1.svg">
    </a>
   <h3 align="center"><b>SvelteKit Auth Neo4j</b> - Example App</h3>
   <p align="center">
   Open Source. Full Stack. Own Your Data.
   </p>
   <p align="center" style="align: center;">
      <a href="https://npm.im/@auth/sveltekit">
        <img alt="npm" src="https://img.shields.io/npm/v/@auth/sveltekit?color=green&label=@auth/sveltekit&style=flat-square">
      </a>
      <a href="https://bundlephobia.com/result?p=@auth/sveltekit">
        <img src="https://img.shields.io/bundlephobia/minzip/@auth/sveltekit?label=size&style=flat-square" alt="Bundle Size"/>
      </a>
      <a href="https://www.npmtrends.com/@auth/sveltekit">
        <img src="https://img.shields.io/npm/dm/@auth/sveltekit?label=downloads&style=flat-square" alt="Downloads" />
      </a>
      <a href="https://npm.im/@auth/sveltekit">
        <img src="https://img.shields.io/badge/TypeScript-blue?style=flat-square" alt="TypeScript" />
      </a>
   </p>
</p>

## Overview

This is a fork of the official SvelteKit Auth example for [Auth.js](https://sveltekit.authjs.dev), to show how to use it
with Neo4j adapter.

## Neo4j Adapter

```typescript
import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"
import { GITHUB_ID, GITHUB_SECRET, NEO4J_PASSWORD, NEO4J_URI, NEO4J_USER } from "$env/static/private"
import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@next-auth/neo4j-adapter"

const driver = neo4j.driver(
  NEO4J_URI,
  neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
)

const neo4jSession = driver.session()
export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  adapter: Neo4jAdapter(neo4jSession),
})
```