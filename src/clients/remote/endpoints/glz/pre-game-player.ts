/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { pregamePlayerEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote";

type PreGamePlayerSuffixData = { puuid: string };

export interface PreGamePlayerRequestConfig
  extends AxiosRequestConfigWithData<PreGamePlayerSuffixData>,
    CustomAxiosRequestConfig {}

export type PreGamePlayerResponse = z.infer<
  (typeof pregamePlayerEndpoint.responses)["200"]
>;

export class PreGamePlayerRemoteApiEndpoint {
  /**
   * @description Get the pre-game match ID for the provided player
   */
  getPreGamePlayer<T = PreGamePlayerResponse>(
    this: RemoteApiClient,
    config: PreGamePlayerRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(pregamePlayerEndpoint.type),
      url: buildSuffix(pregamePlayerEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(pregamePlayerEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                pregamePlayerEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
