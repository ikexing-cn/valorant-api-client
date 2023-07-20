/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { friendsEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local-api";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface FriendsRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type FriendsRawResponse = z.input<
  (typeof friendsEndpoint.responses)["200"]
>;

export type FriendsResponse = z.output<
  (typeof friendsEndpoint.responses)["200"]
>;

export class FriendsLocalApiEndpoint {
  /**
   * @description Get a list of friends
   */
  getFriends<T = FriendsRawResponse>(
    this: LocalApiClient,
    config: FriendsRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  getFriends<T = FriendsResponse>(
    this: LocalApiClient,
    config?: FriendsRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getFriends<T = FriendsResponse>(
    this: LocalApiClient,
    config: FriendsRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: friendsEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(friendsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                friendsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
