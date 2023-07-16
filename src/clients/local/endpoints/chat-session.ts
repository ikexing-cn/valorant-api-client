/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { chatSessionEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { type LocalApiClient } from "~/clients/local";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";

export interface ChatSessionRequestConfig
  extends AxiosRequestConfig,
    CustomAxiosRequestConfig {}

export type ChatSessionResponse = z.infer<
  (typeof chatSessionEndpoint.responses)["200"]
>;

export class ChatSessionLocalApiEndpoint {
  /**
   * @description Get the current session including player name and PUUID
   */
  getChatSession<T = ChatSessionResponse>(
    this: LocalApiClient,
    config: ChatSessionRequestConfig = {},
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "GET",
      url: chatSessionEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(chatSessionEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                chatSessionEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
