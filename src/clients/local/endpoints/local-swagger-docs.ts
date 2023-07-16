/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { localSwaggerDocsEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface LocalSwaggerDocsRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type LocalSwaggerDocsResponse = z.infer<
  (typeof localSwaggerDocsEndpoint.responses)["200"]
>;

export class LocalSwaggerDocsLocalApiEndpoint {
  /**
   * @description Fetches json Swagger docs for local endpoints. Can be imported into Swagger or Insomnia.
   */
  getLocalSwaggerDocs<T = LocalSwaggerDocsResponse>(
    this: LocalApiClient,
    config: LocalSwaggerDocsRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: localSwaggerDocsEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(localSwaggerDocsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                localSwaggerDocsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
