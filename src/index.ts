import fastifyPlugin from "fastify-plugin";
import { Permit, type IPermitConfig } from "permitio";

declare module "fastify" {
  interface FastifyInstance {
    permit: Permit;
  }
}

const FastifyPermitio = fastifyPlugin(
  (fastify, config: Partial<IPermitConfig>, done) => {
    const permit = new Permit(config);
    fastify.decorate("permit", permit);
    done();
  },
  {
    fastify: "5.x",
    name: "fastify-permit-io",
  }
);

export default FastifyPermitio;
