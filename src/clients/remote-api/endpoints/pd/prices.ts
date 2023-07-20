/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { type AxiosRequestConfig } from "axios";
import { pricesEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

export interface PricesRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type PricesRawResponse = z.input<
  (typeof pricesEndpoint.responses)["200"]
>;

export type PricesResponse = z.output<(typeof pricesEndpoint.responses)["200"]>;

export class PricesRemoteApiEndpoint {
  /**
   * @description Get the current store prices for all items
   */
  getPrices<T = PricesRawResponse>(
    this: RemoteApiClient,
    config: PricesRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  getPrices<T = PricesResponse>(
    this: RemoteApiClient,
    config?: PricesRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getPrices<T = PricesResponse>(
    this: RemoteApiClient,
    config: PricesRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(pricesEndpoint.type),
      url: pricesEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(pricesEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(pricesEndpoint, config.customResponseParser),
            ],
          }
        : {}),
    });
  }
}
