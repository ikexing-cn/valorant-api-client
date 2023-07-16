/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import axios from "axios";
import { nameServiceEndpoint } from "valorant-api-types";
import { parseResponseDataFor } from "~/helpers/endpoints";
import { ensureArray } from "~/utils/array";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { type RemoteApiClient } from "~/clients/remote";

type NameServiceBodyData = z.infer<typeof nameServiceEndpoint.body>;

export interface NameServiceRequestConfig
  extends AxiosRequestConfigWithData<NameServiceBodyData>,
    CustomAxiosRequestConfig {}

export type NameServiceResponse = z.infer<
  (typeof nameServiceEndpoint.responses)["200"]
>;

export class NameServiceRemoteApiEndpoint {
  /**
   * @description Get a player's name and tagline by their PUUID. Supports retrieving multiple players in one request.
   */
  putNameService<T = NameServiceResponse>(
    this: RemoteApiClient,
    config: NameServiceRequestConfig,
  ) {
    const shouldParseResponse =
      config.parseResponseData ?? this.options.parseResponseData;

    return this.axiosInstance<T>({
      method: "PUT",
      baseURL: this.getServerUrl(nameServiceEndpoint.type),
      url: nameServiceEndpoint.suffix,
      ...config,
      transformRequest: [
        parseResponseDataFor(nameServiceEndpoint),
        ...ensureArray(axios.defaults.transformRequest),
      ],
      ...(shouldParseResponse
        ? {
            transformResponse: [
              ...ensureArray(axios.defaults.transformResponse),
              parseResponseDataFor(
                nameServiceEndpoint,
                config.customResponseParser,
              ),
            ],
          }
        : {}),
    });
  }
}
