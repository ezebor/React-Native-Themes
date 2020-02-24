/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MainLayout from './src/components/MainLayout';
import styled from 'styled-components';

const App: () => React$Node = () => {
  return <MainLayout />;
};

export default App;
