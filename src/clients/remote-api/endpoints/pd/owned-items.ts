/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios, { type AxiosResponse } from "axios";
import { ownedItemsEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote-api";

type OwnedItemsSuffixData = { puuid: string; itemTypeId: string };

export interface OwnedItemsRequestConfig
  extends AxiosRequestConfigWithData<OwnedItemsSuffixData>,
    CustomAxiosRequestConfig {}

export type OwnedItemsRawResponse = z.input<
  (typeof ownedItemsEndpoint.responses)["200"]
>;

export type OwnedItemsResponse = z.output<
  (typeof ownedItemsEndpoint.responses)["200"]
>;

export class OwnedItemsRemoteApiEndpoint {
  /**
   * @description List what the player owns (agents, skins, buddies, ect.)
   * Category names and IDs:
   *
   * `ItemTypeID` | Name
   * --- | ---
   * `01bb38e1-da47-4e6a-9b3d-945fe4655707` | Agents
   * `f85cb6f7-33e5-4dc8-b609-ec7212301948` | Contracts
   * `d5f120f8-ff8c-4aac-92ea-f2b5acbe9475` | Sprays
   * `dd3bf334-87f3-40bd-b043-682a57a8dc3a` | Gun Buddies
   * `3f296c07-64c3-494c-923b-fe692a4fa1bd` | Cards
   * `e7c63390-eda7-46e0-bb7a-a6abdacd2433` | Skins
   * `3ad1b2b2-acdb-4524-852f-954a76ddae0a` | Skin Variants
   * `de7caa6b-adf7-4588-bbd1-143831e786c6` | Titles
   */
  getOwnedItems<T = OwnedItemsRawResponse>(
    this: RemoteApiClient,
    config: OwnedItemsRequestConfig & { parseResponseData: false },
  ): Promise<AxiosResponse<T>>;
  getOwnedItems<T = OwnedItemsResponse>(
    this: RemoteApiClient,
    config?: OwnedItemsRequestConfig,
  ): Promise<AxiosResponse<T>>;
  getOwnedItems<T = OwnedItemsResponse>(
    this: RemoteApiClient,
    config: OwnedItemsRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(ownedItemsEndpoint.type),
      url: buildSuffix(ownedItemsEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(ownedItemsEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                ownedItemsEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
