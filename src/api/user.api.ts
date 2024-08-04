import type { LoginParams, LoginResult, LogoutParams, LogoutResult } from '../interface/user/login';

import { request } from './request';

/** API to login */
export const apiLogin = (data: LoginParams) => request<LoginResult>('post', '/user/login', data);

/** API to logout */
export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
