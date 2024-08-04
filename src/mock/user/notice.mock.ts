import type { Notice } from '@/interface/layout/notice.interface';

import { intercepter, mock } from '../config';

const mockNoticeList: Notice<'all'>[] = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Hospitali imefungwa',
    datetime: '2017-08-09',
    type: 'notification',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'Sijapata madawa',
    datetime: '2017-08-08',
    type: 'notification',
  },
  {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'Nikona shida ya kifua',
    datetime: '2017-08-07',
    read: true,
    type: 'notification',
  },
  {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'Chakula kizuri kimekua tatizo',
    datetime: '2017-08-07',
    type: 'notification',
  },
  {
    id: '000000005',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'Dawa nilizopewa hazifanyi kazi',
    datetime: '2017-08-07',
    type: 'notification',
  },
  {
    id: '000000006',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Tangazo',
    description: 'Nilianguka kwa moto kwa sababu ya kifafa',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000007',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Tangazo muhimu',
    description: 'Hospitali za kijijini hazina madawa',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000008',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
    title: 'Appointmenti',
    description: 'Sijaweza kutuma kalenda ya kubook',
    datetime: '2017-08-07',
    type: 'message',
    clickClose: true,
  },
  {
    id: '000000009',
    title: 'Salamu',
    description: 'Habari yako, nataka kujua kuhusu kazi yako',
    extra: 'Hakuna',
    status: 'todo',
    type: 'event',
  },
  {
    id: '000000010',
    title: 'Simu yangu',
    description: 'Niliacha simu kwa ofisi yako kutoka ile mara ya mwisho',
    extra: 'Hakuna',
    status: 'urgent',
    type: 'event',
  },
  {
    id: '000000011',
    title: 'Naomba usaidizi',
    description: 'Sijapata daktari mzuri',
    extra: 'Nipigie simu',
    status: 'doing',
    type: 'event',
  },
  {
    id: '000000012',
    title: 'Risit ya madawa',
    description: 'Ndio hii risit ya madawa uliyoagiza',
    extra: 'Nitume wapi?',
    status: 'processing',
    type: 'event',
  },
];

mock.mock('/user/notice', 'get', intercepter(mockNoticeList));

