import fastifyPlugin from "fastify-plugin";
import { Permit, type IPermitConfig } from "permitio";

const FastifyPermitio = fastifyPlugin(
  async function fileBasedRoutingPlugin(fastify, config: IPermitConfig) {
    const permit = new Permit(config);
    fastify.decorate("permit", permit);
    fastify.ready();
  },
  {
    fastify: "5.x",
    name: "fastify-permit-io",
  }
);

export default FastifyPermitio;
