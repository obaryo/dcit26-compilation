// BSCS 3-4
// Bayaborda, Florvin
// Eridao, James Conrad
// Pascua, Aubrey


import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

import SampleModal from './components/SampleModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="CLICK ME" onPress={() => setIsModalOpen(true)} />
      <SampleModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `#000000`,
  },
});







