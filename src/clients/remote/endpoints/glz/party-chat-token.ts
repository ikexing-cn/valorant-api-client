/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { partyChatTokenEndpoint } from "valorant-api-types";
import { parseResponseDataFor, buildSuffix } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote";

type PartyChatTokenSuffixData = { partyId: string };

export interface PartyChatTokenRequestConfig
  extends AxiosRequestConfigWithData<PartyChatTokenSuffixData>,
    CustomAxiosRequestConfig {}

export type PartyChatTokenResponse = z.infer<
  (typeof partyChatTokenEndpoint.responses)["200"]
>;

export class PartyChatTokenRemoteApiEndpoint {
  /**
   * @description Get the party chat token
   */
  getPartyChatToken<T = PartyChatTokenResponse>(
    this: RemoteApiClient,
    config: PartyChatTokenRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      baseURL: this.getServerUrl(partyChatTokenEndpoint.type),
      url: buildSuffix(partyChatTokenEndpoint.suffix, config.data),
      ...config,
      transformRequest: [
        parseResponseDataFor(partyChatTokenEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                partyChatTokenEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
