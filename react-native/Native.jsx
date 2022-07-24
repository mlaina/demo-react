import React from 'react';
import WebView from 'react-native-webview';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';

const ENV = {
  dev: {
    apiUrl: '',
  },
  pro: {
    apiUrl: '',
  },
};

function getEnvVars(env = '') {
  if (!env || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('pro') !== -1) return ENV.pro;
}

const App = () => (
  <WebView
    source={{
      uri: getEnvVars(Constants.manifest.releaseChannel).apiUrl,
    }}
    style={{ marginTop: 0 }}
  />
);

registerRootComponent(App);
