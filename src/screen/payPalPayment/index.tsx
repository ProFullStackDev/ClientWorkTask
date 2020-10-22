import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const PayPalPayment: React.FunctionComponent = (props: any) => {
  useEffect(() => {
    Redirect();
  }, []);

  const Redirect = () => {
    setTimeout(() => {
      props.navigation.pop();
      props.navigation.navigate('Screen_03');
    }, 3000);
  };
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
      <Text
        style={{
          letterSpacing: 1,
          fontSize: 16,
          fontWeight: '100',
          textAlign: 'center',
        }}
      >
        Processing payment {'\n'} @Paypal inc.
      </Text>
      <Text
        style={{
          letterSpacing: 1,
          fontSize: 16,
          fontWeight: '100',
          textAlign: 'center',
        }}
      >
        Will redirect to home screen after successful payment {'\n'}
        Redirecting...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default PayPalPayment;
