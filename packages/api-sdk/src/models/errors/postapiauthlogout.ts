/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
import * as z from "zod";

/**
 * Internal server error
 */
export type PostApiAuthLogoutInternalServerErrorData = {
  error?: string | undefined;
};

/**
 * Internal server error
 */
export class PostApiAuthLogoutInternalServerError extends Error {
  error?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: PostApiAuthLogoutInternalServerErrorData;

  constructor(err: PostApiAuthLogoutInternalServerErrorData) {
    const message =
      "message" in err && typeof err.message === "string"
        ? err.message
        : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.error != null) this.error = err.error;

    this.name = "PostApiAuthLogoutInternalServerError";
  }
}

/** @internal */
export const PostApiAuthLogoutInternalServerError$inboundSchema: z.ZodType<
  PostApiAuthLogoutInternalServerError,
  z.ZodTypeDef,
  unknown
> = z
  .object({
    error: z.string().optional(),
  })
  .transform((v) => {
    return new PostApiAuthLogoutInternalServerError(v);
  });

/** @internal */
export type PostApiAuthLogoutInternalServerError$Outbound = {
  error?: string | undefined;
};

/** @internal */
export const PostApiAuthLogoutInternalServerError$outboundSchema: z.ZodType<
  PostApiAuthLogoutInternalServerError$Outbound,
  z.ZodTypeDef,
  PostApiAuthLogoutInternalServerError
> = z
  .instanceof(PostApiAuthLogoutInternalServerError)
  .transform((v) => v.data$)
  .pipe(
    z.object({
      error: z.string().optional(),
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostApiAuthLogoutInternalServerError$ {
  /** @deprecated use `PostApiAuthLogoutInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    PostApiAuthLogoutInternalServerError$inboundSchema;
  /** @deprecated use `PostApiAuthLogoutInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    PostApiAuthLogoutInternalServerError$outboundSchema;
  /** @deprecated use `PostApiAuthLogoutInternalServerError$Outbound` instead. */
  export type Outbound = PostApiAuthLogoutInternalServerError$Outbound;
}
