/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { partyRemovePlayerEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote";

type PartyRemovePlayerSuffixData = { puuid: string };

export interface PartyRemovePlayerRequestConfig
  extends AxiosRequestConfigWithData<PartyRemovePlayerSuffixData>,
    CustomAxiosRequestConfig {}

export type PartyRemovePlayerResponse = z.infer<
  (typeof partyRemovePlayerEndpoint.responses)["204"]
>;

export class PartyRemovePlayerRemoteApiEndpoint {
  /**
   * @description Remove a player from the current party
   */
  deletePartyRemovePlayer<T = PartyRemovePlayerResponse>(
    this: RemoteApiClient,
    config: PartyRemovePlayerRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "DELETE",
      baseURL: this.getServerUrl(partyRemovePlayerEndpoint.type),
      url: buildSuffix(partyRemovePlayerEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(partyRemovePlayerEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                partyRemovePlayerEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
