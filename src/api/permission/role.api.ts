import type { GetRoleResult } from '@/interface/permission/role.interface';

import { request } from '../request';

/** API to get the role list */
export const apiGetRoleList = () => request<GetRoleResult>('get', '/permission/role');
