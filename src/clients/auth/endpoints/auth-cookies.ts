/* THIS IS AN AUTOGENERATED FILE - DO NOT EDIT */

import { z } from "zod";
import { authCookiesEndpoint } from "valorant-api-types";
import { type AuthApiClient } from "~/clients/auth";
import { type CustomAxiosRequestConfig } from "~/clients/common/types";
import { AxiosRequestConfigWithData } from "~/utils/lib/axios";

type AuthCookiesBodyData = z.infer<typeof authCookiesEndpoint.body>;

export interface AuthCookiesRequestConfig
  extends AxiosRequestConfigWithData<AuthCookiesBodyData>,
    CustomAxiosRequestConfig {}

export class AuthCookiesAuthApiEndpoint {
  /**
   * @description Prepare cookies for auth request
   */
  postAuthCookies<T = any>(
    this: AuthApiClient,
    config: AuthCookiesRequestConfig,
  ) {
    return this.axiosInstance<T>({
      method: "POST",
      url: authCookiesEndpoint.suffix,
      headers: Object.fromEntries(authCookiesEndpoint.headers),
      ...config,
    });
  }
}
