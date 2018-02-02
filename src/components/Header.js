import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.testStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  testStyle: {
    fontSize: 20
  }
});

export default Header;
