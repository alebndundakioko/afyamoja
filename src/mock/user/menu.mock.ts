import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
 
  {
    code: 'dashboard',
    label: {
      zh_CN: 'Dashbodi ya namba',
      en_US: 'Analytics Dashboard',
    },
    icon: 'Kuhusu saiti',
    path: '/dashboard',
  },
  
  {
    code: 'component',
    label: {
      zh_CN: 'Peji ya wagonjwa',
      en_US: 'Patients page',
    },
    icon: 'permission',
    path: '/component',
    children: [
      {
        code: 'componentForm',
        label: {
          zh_CN: 'Ongeza mgonjwa',
          en_US: 'Add patient',
        },
        path: '/component/form',
      },
      {
        code: 'componentTable',
        label: {
          zh_CN: 'Rekodi',
          en_US: 'Patient records',
        },
        path: '/component/table',
      },
      {
        code: 'componentSearch',
        label: {
          zh_CN: 'Tafuta mgonjwa',
          en_US: 'Find patients',
        },
        path: '/component/search',
      },
      {
        code: 'componentAside',
        label: {
          zh_CN: 'Hifadhi saa',
          en_US: 'Book appointment',
        },
        path: '/component/aside',
      },
      {
        code: 'componentTabs',
        label: {
          zh_CN: 'Teuzi zijazo',
          en_US: 'View appointments',
        },
        path: '/component/tabs',
      },
      
    ],
  },

  {
    code: 'business',
    label: {
      zh_CN: 'Aktiviti zangu',
      en_US: 'My activities',
    },
    icon: 'permission',
    path: '/business',
    children: [
      {
        code: 'basic',
        label: {
          zh_CN: 'Maktaba ya posti',
          en_US: 'Content Library',
        },
        path: '/business/basic',
      },
      {
        code: 'withSearch',
        label: {
          zh_CN: 'Ongeza posti',
          en_US: 'Upload content',
        },
        path: '/business/with-search',
      },
      {
        code: 'withAside',
        label: {
          zh_CN: 'Wanavyosema',
          en_US: 'Content reviews',
        },
        path: '/business/with-aside',
      },
      {
        code: 'withRadioCard',
        label: {
          zh_CN: 'Wafuatazi wangu',
          en_US: 'My subscribers',
        },
        path: '/business/with-radio-cards',
      },
      {
        code: 'withTabs',
        label: {
          zh_CN: 'Tuma meseji',
          en_US: 'Mass messaging',
        },
        path: '/business/with-tabs',
      },
    ],
  },
  

  
  {
    code: 'permission',
    label: {
      zh_CN: 'Mipangilio',
      en_US: 'Settings',
    },
    icon: 'permission',
    path: '/permission',
    children: [
      {
        code: 'routePermission',
        label: {
          zh_CN: 'Profaili yangu',
          en_US: 'Profile settings',
        },
        path: '/permission/route',
      },
      {
        code: 'notFound',
        label: {
          zh_CN: 'Zungumza nasi',
          en_US: 'Contact us',
        },
        path: '/permission/404',
      },
    ],
  },

  {
    code: 'guide',
    label: {
      zh_CN: 'Mwongozo',
      en_US: 'Site Navigation',
    },
    icon: 'guide',
    path: '/guide',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
