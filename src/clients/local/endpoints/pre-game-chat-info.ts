/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { pregameChatInfoEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface PreGameChatInfoRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type PreGameChatInfoResponse = z.infer<
  (typeof pregameChatInfoEndpoint.responses)["200"]
>;

export class PreGameChatInfoLocalApiEndpoint {
  /**
   * @description Get information about the pre-game chat
   */
  getPreGameChatInfo<T = PreGameChatInfoResponse>(
    this: LocalApiClient,
    config: PreGameChatInfoRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: pregameChatInfoEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(pregameChatInfoEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                pregameChatInfoEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
