/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { friendRequestsEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local-api";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface FriendRequestsRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type FriendRequestsRawResponse = z.input<
  (typeof friendRequestsEndpoint.responses)["200"]
>;

export type FriendRequestsResponse = z.output<
  (typeof friendRequestsEndpoint.responses)["200"]
>;

export class FriendRequestsLocalApiEndpoint {
  /**
   * @description Get a list of friend requests
   */
  getFriendRequests<T = FriendRequestsRawResponse>(
    this: LocalApiClient,
    config: FriendRequestsRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  getFriendRequests<T = FriendRequestsResponse>(
    this: LocalApiClient,
    config?: FriendRequestsRequestConfig,
  ): Promise<AxiosResponse<T>>;
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
