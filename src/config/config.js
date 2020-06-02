import React from 'react'
import Loadable from 'react-loadable'
import getMenuItems from './menuItems'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import grants from './grants'
import parseLanguages from 'rmw-shell/lib/utils/localeTools'

const Loading = () => <LoadingComponent />

const LPAsync = Loadable({
  loader: () => import('../../src/pages/LandingPage'),
  loading: Loading,
})

const config = {
  firebase_config: {
    apiKey: 'AIzaSyB3puIXwQSnyQHcbuVlD5xRedySuCmoKlA',
    authDomain: 'rws-app-97672.firebaseapp.com',
    databaseURL: 'https://rws-app-97672.firebaseio.com',
    projectId: 'rws-app-97672',
    storageBucket: 'rws-app-97672.appspot.com',
    messagingSenderId: '121619430084',
    appId: '1:121619430084:web:efd72e9aa19f615ba66791',
  },
  firebase_config_devp: {
    apiKey: 'AIzaSyB3puIXwQSnyQHcbuVlD5xRedySuCmoKlA',
    authDomain: 'rws-app-97672.firebaseapp.com',
    databaseURL: 'https://rws-app-97672.firebaseio.com',
    projectId: 'rws-app-97672',
    storageBucket: 'rws-app-97672.appspot.com',
    messagingSenderId: '121619430084',
    appId: '1:121619430084:web:efd72e9aa19f615ba66791',
  },
  firebase_config_dev: {
    apiKey: 'AIzaSyB3puIXwQSnyQHcbuVlD5xRedySuCmoKlA',
    authDomain: 'rws-app-97672.firebaseapp.com',
    databaseURL: 'https://rws-app-97672.firebaseio.com',
    projectId: 'rws-app-97672',
    storageBucket: 'rws-app-97672.appspot.com',
    messagingSenderId: '121619430084',
    appId: '1:121619430084:web:efd72e9aa19f615ba66791',
  },
  firebase_providers: [
    'google.com',
    'facebook.com',
    'twitter.com',
    'github.com',
    'password',
    'phone',
  ],
  googleMaps: {
    apiKey: 'AIzaSyByMSTTLt1Mf_4K1J9necAbw2NPDu2WD7g',
  },
  initial_state: {
    themeSource: {
      isNightModeOn: true,
      source: 'light',
    },
    locale: parseLanguages(['en', 'bs', 'es', 'ru', 'de', 'it', 'fr'], 'en'),
  },
  drawer_width: 256,
  locales,
  themes,
  grants,
  routes,
  getMenuItems,
  firebaseLoad: () => import('./firebase'),
  landingPage: LPAsync,
}

export default config
