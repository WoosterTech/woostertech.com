import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '699d3a03a4989b32de118ab6051433661baab097', queries });
export default client;
  