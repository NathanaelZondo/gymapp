import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (

        <Button
        title="Back to home"
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />

    );
  }
}