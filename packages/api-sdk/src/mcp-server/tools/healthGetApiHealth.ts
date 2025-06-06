/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import { healthGetApiHealth } from "../../funcs/healthGetApiHealth.js";
import { ToolDefinition, formatResult } from "../tools.js";

export const tool$healthGetApiHealth: ToolDefinition = {
  name: "health-get-api-health",
  description: `Basic health check

Check if the API is running`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await healthGetApiHealth(client, {
      fetchOptions: { signal: ctx.signal },
    }).$inspect();

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
