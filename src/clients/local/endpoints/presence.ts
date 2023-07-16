/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { presenceEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface PresenceRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type PresenceResponse = z.infer<
  (typeof presenceEndpoint.responses)["200"]
>;

export class PresenceLocalApiEndpoint {
  /**
   * @description Get a list of online friends and their activity
   *   If the player is playing Valorant, `private` is a base64-encoded JSON string that contains useful information such as party and in-progress game score.
   */
  getPresence<T = PresenceResponse>(
    this: LocalApiClient,
    config: PresenceRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: presenceEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(presenceEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                presenceEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
