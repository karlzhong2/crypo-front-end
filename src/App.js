import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import EmailInput from './components/EmailInput';
import { sendEmail } from './api/emailApi';

const App = () => {
  const handleEmailSubmit = async (email) => {
    try {
      const data = await sendEmail(email);
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <EmailInput onEmailSubmit={handleEmailSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

