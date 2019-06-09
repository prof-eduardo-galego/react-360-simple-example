import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-360';

export default class Hello360 extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>
            Simple Example with React 360
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 0, 0, 1.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
