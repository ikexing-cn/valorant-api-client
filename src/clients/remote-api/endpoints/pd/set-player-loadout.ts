/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { setPlayerLoadoutEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type SetPlayerLoadoutBodyData = z.infer<typeof setPlayerLoadoutEndpoint.body>;

type SetPlayerLoadoutSuffixData = { puuid: string };

export interface SetPlayerLoadoutRequestConfig
  extends AxiosRequestConfigWithData<
      SetPlayerLoadoutBodyData & SetPlayerLoadoutSuffixData
    >,
    CustomAxiosRequestConfig {}

export type SetPlayerLoadoutRawResponse = z.input<
  (typeof setPlayerLoadoutEndpoint.responses)["200"]
>;

export type SetPlayerLoadoutResponse = z.output<
  (typeof setPlayerLoadoutEndpoint.responses)["200"]
>;

export class SetPlayerLoadoutRemoteApiEndpoint {
  /**
   * @description Set the player's current loadout.
   */
  putSetPlayerLoadout<T = SetPlayerLoadoutRawResponse>(
    this: RemoteApiClient,
    config: SetPlayerLoadoutRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  putSetPlayerLoadout<T = SetPlayerLoadoutResponse>(
    this: RemoteApiClient,
    config: SetPlayerLoadoutRequestConfig,
  ): Promise<AxiosResponse<T>>;
  putSetPlayerLoadout<T = SetPlayerLoadoutResponse>(
    this: RemoteApiClient,
    config: SetPlayerLoadoutRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "PUT",
      baseURL: this.getServerUrl(setPlayerLoadoutEndpoint.type),
      url: buildSuffix(setPlayerLoadoutEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(setPlayerLoadoutEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                setPlayerLoadoutEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
