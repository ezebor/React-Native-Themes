/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import MainLayout from './src/components/MainLayout';
import {StateProvider} from './src/state/store';

export default function App() {
  return (
    <StateProvider>
      <MainLayout />
    </StateProvider>
  );
}
