/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { partyChatInfoEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local-api";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface PartyChatInfoRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type PartyChatInfoRawResponse = z.input<
  (typeof partyChatInfoEndpoint.responses)["200"]
>;

export type PartyChatInfoResponse = z.output<
  (typeof partyChatInfoEndpoint.responses)["200"]
>;

export class PartyChatInfoLocalApiEndpoint {
  /**
   * @description Get information about the party chat
   */
  getPartyChatInfo<T = PartyChatInfoRawResponse>(
    this: LocalApiClient,
    config: PartyChatInfoRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  getPartyChatInfo<T = PartyChatInfoResponse>(
    this: LocalApiClient,
    config?: PartyChatInfoRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getPartyChatInfo<T = PartyChatInfoResponse>(
    this: LocalApiClient,
    config: PartyChatInfoRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: partyChatInfoEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(partyChatInfoEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                partyChatInfoEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
