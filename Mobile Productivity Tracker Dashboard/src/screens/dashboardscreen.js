import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';

export default function DashboardScreen({ navigation }) {
  const tasks = useSelector(state => state.tasks);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productivity Dashboard</Text>

      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [{ data: [20, 45, 28, 80, 99] }],
        }}
        width={300}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#f3f3f3',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        }}
      />

      <Button title="Go to Tasks" onPress={() => navigation.navigate('Tasks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
