/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from './stores/stores';
import Home from './screens/Home';
import Login from './screens/Login';


function App(): JSX.Element {
  const { userStore } = useStore();

  return (
    <>
      {userStore.isLoggedIn && (<Home />)}
      {!userStore.isLoggedIn && (<Login />)}
    </>
  );
}

export default observer(App);
