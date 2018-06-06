/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
           <CameraKitCameraScreen
           actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
           laserColor={"blue"}
           frameColor={"yellow"}
           flashImages={{
            on: require('./images/flashOn.png'),
            off: require('./images/flashOff.png'),
            auto: require('./images/flashAuto.png')
          }}
          cameraFlipImage={require('./images/cameraFlipIcon.png')}
          captureButtonImage={require('./images/cameraButton.png')}
           hideControls={false}           //(default false) optional, hide buttons and additional controls on top and bottom of screen
           offsetForScannerFrame = {10}   //(default 30) optional, offset from left and right side of the screen
           heightForScannerFrame = {300}  //(default 200) optional, change height of the scanner frame
           colorForScannerFrame = {'red'} //(default white) optional, change colot of the scanner frame
       />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
