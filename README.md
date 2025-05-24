# fastify-permit-io

[![NPM version](https://img.shields.io/npm/v/fastify-permit-io.svg?style=flat)](https://www.npmjs.com/package/fastify-permit-io)

A [Fastify](https://www.fastify.io/) plugin for seamless integration with [Permit.io](https://permit.io), enabling robust, flexible, and scalable permissions and authorization in your Fastify applications.

## Features

- Installs a [`Permit`](https://docs.permit.io/reference/node-sdk) instance on your Fastify server
- Supports all Permit.io authorization models (RBAC, ABAC, ReBAC)
- Simple, type-safe integration

## Installation

```sh
npm install fastify-permit-io permitio
```

## Usage

```javascript
import Fastify from "fastify";
import FastifyPermitio from "fastify-permit-io";

const app = Fastify();

app.register(FastifyPermitio, {
  pdp: "https://cloudpdp.api.permit.io",
  token: "YOUR_PERMIT_API_KEY",
  // ...other Permit config options
});

app.get("/resource", async (request, reply) => {
  // Access the Permit instance
  const permit = app.permit;
  const allowed = await permit.check("user:123", "read", "document:456");
  if (!allowed) {
    return reply.code(403).send({ error: "Forbidden" });
  }
  return { data: "Secret document" };
});

app.listen({ port: 3000 });
```

## Additional Context

I am not affiliated with `permit.io` and this project is an independent integration created for convenience. For official support or documentation, please refer to the [Permit.io website](https://permit.io) and their [official documentation](https://docs.permit.io/).

## License

Licensed under [MIT](./LICENSE).
