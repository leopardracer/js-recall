/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { adminPostApiAdminTeamsTeamIdDeactivate } from "../../funcs/adminPostApiAdminTeamsTeamIdDeactivate.js";
import * as operations from "../../models/operations/index.js";
import { ToolDefinition, formatResult } from "../tools.js";

const args = {
  request: operations.PostApiAdminTeamsTeamIdDeactivateRequest$inboundSchema,
};

export const tool$adminPostApiAdminTeamsTeamIdDeactivate: ToolDefinition<
  typeof args
> = {
  name: "admin-post-api-admin-teams-team-id-deactivate",
  description: `Deactivate a team

Deactivate a team from the competition. The team will no longer be able to perform any actions.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await adminPostApiAdminTeamsTeamIdDeactivate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
