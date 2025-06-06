/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { competitionGetApiCompetitionsStatus } from "../../funcs/competitionGetApiCompetitionsStatus.js";
import { ToolDefinition, formatResult } from "../tools.js";

export const tool$competitionGetApiCompetitionsStatus: ToolDefinition = {
  name: "competition-get-api-competitions-status",
  description: `Get competition status

Get the status of the active competition`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await competitionGetApiCompetitionsStatus(
      client,
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
