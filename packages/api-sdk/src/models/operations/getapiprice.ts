/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";

import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Blockchain type of the token
 */
export const GetApiPriceQueryParamChain = {
  Evm: "evm",
  Svm: "svm",
} as const;
/**
 * Blockchain type of the token
 */
export type GetApiPriceQueryParamChain = ClosedEnum<
  typeof GetApiPriceQueryParamChain
>;

/**
 * Specific chain for EVM tokens
 */
export const GetApiPriceSpecificChain = {
  Eth: "eth",
  Polygon: "polygon",
  Bsc: "bsc",
  Arbitrum: "arbitrum",
  Optimism: "optimism",
  Avalanche: "avalanche",
  Base: "base",
  Linea: "linea",
  Zksync: "zksync",
  Scroll: "scroll",
  Mantle: "mantle",
  Svm: "svm",
} as const;
/**
 * Specific chain for EVM tokens
 */
export type GetApiPriceSpecificChain = ClosedEnum<
  typeof GetApiPriceSpecificChain
>;

export type GetApiPriceRequest = {
  /**
   * Token address
   */
  token: string;
  /**
   * Blockchain type of the token
   */
  chain?: GetApiPriceQueryParamChain | undefined;
  /**
   * Specific chain for EVM tokens
   */
  specificChain?: GetApiPriceSpecificChain | undefined;
};

/**
 * Blockchain type of the token
 */
export const GetApiPriceChainResponse = {
  Evm: "evm",
  Svm: "svm",
} as const;
/**
 * Blockchain type of the token
 */
export type GetApiPriceChainResponse = ClosedEnum<
  typeof GetApiPriceChainResponse
>;

/**
 * Token price information
 */
export type GetApiPriceResponse = {
  /**
   * Whether the price was successfully retrieved
   */
  success?: boolean | undefined;
  /**
   * Current price of the token in USD
   */
  price?: number | null | undefined;
  /**
   * Token address
   */
  token?: string | undefined;
  /**
   * Blockchain type of the token
   */
  chain?: GetApiPriceChainResponse | undefined;
  /**
   * Specific chain for EVM tokens
   */
  specificChain?: string | null | undefined;
  /**
   * Token symbol
   */
  symbol?: string | undefined;
  /**
   * Timestamp when the price was fetched
   */
  timestamp?: Date | undefined;
};

/** @internal */
export const GetApiPriceQueryParamChain$inboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceQueryParamChain
> = z.nativeEnum(GetApiPriceQueryParamChain);

/** @internal */
export const GetApiPriceQueryParamChain$outboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceQueryParamChain
> = GetApiPriceQueryParamChain$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiPriceQueryParamChain$ {
  /** @deprecated use `GetApiPriceQueryParamChain$inboundSchema` instead. */
  export const inboundSchema = GetApiPriceQueryParamChain$inboundSchema;
  /** @deprecated use `GetApiPriceQueryParamChain$outboundSchema` instead. */
  export const outboundSchema = GetApiPriceQueryParamChain$outboundSchema;
}

/** @internal */
export const GetApiPriceSpecificChain$inboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceSpecificChain
> = z.nativeEnum(GetApiPriceSpecificChain);

/** @internal */
export const GetApiPriceSpecificChain$outboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceSpecificChain
> = GetApiPriceSpecificChain$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiPriceSpecificChain$ {
  /** @deprecated use `GetApiPriceSpecificChain$inboundSchema` instead. */
  export const inboundSchema = GetApiPriceSpecificChain$inboundSchema;
  /** @deprecated use `GetApiPriceSpecificChain$outboundSchema` instead. */
  export const outboundSchema = GetApiPriceSpecificChain$outboundSchema;
}

/** @internal */
export const GetApiPriceRequest$inboundSchema: z.ZodType<
  GetApiPriceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  chain: GetApiPriceQueryParamChain$inboundSchema.optional(),
  specificChain: GetApiPriceSpecificChain$inboundSchema.optional(),
});

/** @internal */
export type GetApiPriceRequest$Outbound = {
  token: string;
  chain?: string | undefined;
  specificChain?: string | undefined;
};

/** @internal */
export const GetApiPriceRequest$outboundSchema: z.ZodType<
  GetApiPriceRequest$Outbound,
  z.ZodTypeDef,
  GetApiPriceRequest
> = z.object({
  token: z.string(),
  chain: GetApiPriceQueryParamChain$outboundSchema.optional(),
  specificChain: GetApiPriceSpecificChain$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiPriceRequest$ {
  /** @deprecated use `GetApiPriceRequest$inboundSchema` instead. */
  export const inboundSchema = GetApiPriceRequest$inboundSchema;
  /** @deprecated use `GetApiPriceRequest$outboundSchema` instead. */
  export const outboundSchema = GetApiPriceRequest$outboundSchema;
  /** @deprecated use `GetApiPriceRequest$Outbound` instead. */
  export type Outbound = GetApiPriceRequest$Outbound;
}

export function getApiPriceRequestToJSON(
  getApiPriceRequest: GetApiPriceRequest,
): string {
  return JSON.stringify(
    GetApiPriceRequest$outboundSchema.parse(getApiPriceRequest),
  );
}

export function getApiPriceRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetApiPriceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiPriceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiPriceRequest' from JSON`,
  );
}

/** @internal */
export const GetApiPriceChainResponse$inboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceChainResponse
> = z.nativeEnum(GetApiPriceChainResponse);

/** @internal */
export const GetApiPriceChainResponse$outboundSchema: z.ZodNativeEnum<
  typeof GetApiPriceChainResponse
> = GetApiPriceChainResponse$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiPriceChainResponse$ {
  /** @deprecated use `GetApiPriceChainResponse$inboundSchema` instead. */
  export const inboundSchema = GetApiPriceChainResponse$inboundSchema;
  /** @deprecated use `GetApiPriceChainResponse$outboundSchema` instead. */
  export const outboundSchema = GetApiPriceChainResponse$outboundSchema;
}

/** @internal */
export const GetApiPriceResponse$inboundSchema: z.ZodType<
  GetApiPriceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  price: z.nullable(z.number()).optional(),
  token: z.string().optional(),
  chain: GetApiPriceChainResponse$inboundSchema.optional(),
  specificChain: z.nullable(z.string()).optional(),
  symbol: z.string().optional(),
  timestamp: z
    .string()
    .datetime({ offset: true })
    .transform((v) => new Date(v))
    .optional(),
});

/** @internal */
export type GetApiPriceResponse$Outbound = {
  success?: boolean | undefined;
  price?: number | null | undefined;
  token?: string | undefined;
  chain?: string | undefined;
  specificChain?: string | null | undefined;
  symbol?: string | undefined;
  timestamp?: string | undefined;
};

/** @internal */
export const GetApiPriceResponse$outboundSchema: z.ZodType<
  GetApiPriceResponse$Outbound,
  z.ZodTypeDef,
  GetApiPriceResponse
> = z.object({
  success: z.boolean().optional(),
  price: z.nullable(z.number()).optional(),
  token: z.string().optional(),
  chain: GetApiPriceChainResponse$outboundSchema.optional(),
  specificChain: z.nullable(z.string()).optional(),
  symbol: z.string().optional(),
  timestamp: z
    .date()
    .transform((v) => v.toISOString())
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiPriceResponse$ {
  /** @deprecated use `GetApiPriceResponse$inboundSchema` instead. */
  export const inboundSchema = GetApiPriceResponse$inboundSchema;
  /** @deprecated use `GetApiPriceResponse$outboundSchema` instead. */
  export const outboundSchema = GetApiPriceResponse$outboundSchema;
  /** @deprecated use `GetApiPriceResponse$Outbound` instead. */
  export type Outbound = GetApiPriceResponse$Outbound;
}

export function getApiPriceResponseToJSON(
  getApiPriceResponse: GetApiPriceResponse,
): string {
  return JSON.stringify(
    GetApiPriceResponse$outboundSchema.parse(getApiPriceResponse),
  );
}

export function getApiPriceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetApiPriceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiPriceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiPriceResponse' from JSON`,
  );
}
