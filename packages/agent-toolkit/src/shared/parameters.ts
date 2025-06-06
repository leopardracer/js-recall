import { z } from "zod";

import { Context } from "./configuration.js";

/**
 * EVM hex string address (e.g., accounts or buckets).
 */
const addressSchema = z.string().regex(/^0x[a-fA-F0-9]{40}$/);

/**
 * Parameters for the getAccountInfo function
 * @param address - The address of the account to get account info for (optional)
 */
export const getAccountInfoParameters = (_context: Context = {}) =>
  z.object({
    address: addressSchema
      .optional()
      .describe("The address of the account (EVM hex string address)"),
  });

/**
 * Parameters for the listBuckets function
 * @param address - The address of the account to list buckets for (optional)
 */
export const listBucketsParameters = (_context: Context = {}) =>
  z.object({
    address: addressSchema
      .optional()
      .describe(
        "The address of the account to list buckets for (EVM hex string address)",
      ),
  });

/**
 * Parameters for the getCreditInfo function
 * @param address - The address of the account to get credit info for (optional)
 */
export const getCreditInfoParameters = (_context: Context = {}) =>
  z.object({
    address: addressSchema
      .optional()
      .describe("The address of the account (EVM hex string address)"),
  });

/**
 * Parameters for the buyCredit function
 * @param amount - The amount of credit to buy
 * @param to - The address of the account to buy credit for (optional)
 */
export const buyCreditParameters = (_context: Context = {}) =>
  z.object({
    amount: z.string().min(1).describe("The amount of credit to buy"),
    to: addressSchema
      .optional()
      .describe(
        "The address of the account to buy credit for (EVM hex string address)",
      ),
  });

/**
 * Parameters for the createBucket function
 * @param bucketAlias - The alias of the bucket to create
 * @param metadata - The metadata to store with the bucket (optional)
 */
export const createBucketParameters = (_context: Context = {}) =>
  z.object({
    bucketAlias: z
      .string()
      .min(1)
      .describe("The alias of the bucket to create"),
    metadata: z
      .record(
        z.string().min(1).describe("The key of the metadata"),
        z.string().min(1).describe("The value of the metadata"),
      )
      .optional()
      .describe("The metadata to store with the bucket"),
  });

/**
 * Parameters for the getOrCreateBucket function
 * @param bucketAlias - The alias of the bucket to retrieve or create
 * @param metadata - The metadata to store with the bucket (optional)
 */
export const getOrCreateBucketParameters = (_context: Context = {}) =>
  z.object({
    bucketAlias: z
      .string()
      .describe("The alias of the bucket to retrieve or create"),
    metadata: z
      .record(
        z.string().min(1).describe("The key of the metadata"),
        z.string().min(1).describe("The value of the metadata"),
      )
      .optional()
      .describe("The metadata to store with the bucket"),
  });

/**
 * Parameters for the addObject function
 * @param bucket - The address of the bucket
 * @param key - The key under which to store the object
 * @param data - The data to store as a string value
 * @param metadata - The metadata to store with the object
 * @param overwrite - Whether to overwrite existing data at that key
 */
export const addObjectParameters = (_context: Context = {}) =>
  z.object({
    bucket: addressSchema.describe("The address of the bucket"),
    key: z.string().min(1).describe("The key under which to store the object"),
    data: z.string().describe("The data to store as a string value"),
    metadata: z
      .record(
        z.string().min(1).describe("The key of the metadata"),
        z.string().min(1).describe("The value of the metadata"),
      )
      .optional()
      .describe("The metadata to store with the object"),
    overwrite: z
      .boolean()
      .optional()
      .describe("Whether to overwrite existing data at that key"),
  });

/**
 * Parameters for the getObject function
 * @param bucket - The address of the bucket
 * @param key - The key under which the object is stored
 */
export const getObjectParameters = (_context: Context = {}) =>
  z.object({
    bucket: addressSchema.describe("The address of the bucket"),
    key: z.string().min(1).describe("The key under which the object is stored"),
  });

/**
 * Parameters for the queryObjects function
 * @param bucket - The address of the bucket
 * @param prefix - The prefix of the objects to query (optional)
 * @param delimiter - The delimiter of the objects to query (optional)
 * @param startKey - The starting key of the objects to query (optional)
 * @param limit - The maximum number of objects to query (optional)
 */
export const queryObjectsParameters = (_context: Context = {}) =>
  z.object({
    bucket: addressSchema.describe("The address of the bucket"),
    prefix: z
      .string()
      .min(1)
      .optional()
      .describe("The prefix of the objects to query"),
    delimiter: z
      .string()
      .min(1)
      .optional()
      .describe("The delimiter of the objects to query"),
    startKey: z
      .string()
      .min(1)
      .optional()
      .describe("The starting key of the objects to query"),
    limit: z
      .number()
      .min(1)
      .optional()
      .describe("The maximum number of objects to query"),
  });
