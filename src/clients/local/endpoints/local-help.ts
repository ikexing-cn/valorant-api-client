/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { localHelpEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface LocalHelpRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type LocalHelpResponse = z.infer<
  (typeof localHelpEndpoint.responses)["200"]
>;

export class LocalHelpLocalApiEndpoint {
  /**
   * @description Get help for the local client
   */
  getLocalHelp<T = LocalHelpResponse>(
    this: LocalApiClient,
    config: LocalHelpRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: localHelpEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(localHelpEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                localHelpEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
