/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { friendRequestsEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface FriendRequestsRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type FriendRequestsResponse = z.infer<
  (typeof friendRequestsEndpoint.responses)["200"]
>;

export class FriendRequestsLocalApiEndpoint {
  /**
   * @description Get a list of friend requests
   */
  getFriendRequests<T = FriendRequestsResponse>(
    this: LocalApiClient,
    config: FriendRequestsRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: friendRequestsEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(friendRequestsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                friendRequestsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
