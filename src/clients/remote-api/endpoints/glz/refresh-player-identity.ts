/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { refreshPlayerIdentityEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type RefreshPlayerIdentitySuffixData = { partyId: string; puuid: string };

export interface RefreshPlayerIdentityRequestConfig
  extends AxiosRequestConfigWithData<RefreshPlayerIdentitySuffixData>,
    CustomAxiosRequestConfig {}

export type RefreshPlayerIdentityRawResponse = z.input<
  (typeof refreshPlayerIdentityEndpoint.responses)["200"]
>;

export type RefreshPlayerIdentityResponse = z.output<
  (typeof refreshPlayerIdentityEndpoint.responses)["200"]
>;

export class RefreshPlayerIdentityRemoteApiEndpoint {
  /**
   * @description Refresh the identity of the specified player
   */
  postRefreshPlayerIdentity<T = RefreshPlayerIdentityRawResponse>(
    this: RemoteApiClient,
    config: RefreshPlayerIdentityRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  postRefreshPlayerIdentity<T = RefreshPlayerIdentityResponse>(
    this: RemoteApiClient,
    config?: RefreshPlayerIdentityRequestConfig,
  ): Promise<AxiosResponse<T>>;
  postRefreshPlayerIdentity<T = RefreshPlayerIdentityResponse>(
    this: RemoteApiClient,
    config: RefreshPlayerIdentityRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "POST",
      baseURL: this.getServerUrl(refreshPlayerIdentityEndpoint.type),
      url: buildSuffix(refreshPlayerIdentityEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(refreshPlayerIdentityEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                refreshPlayerIdentityEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
