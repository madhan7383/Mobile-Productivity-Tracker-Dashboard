import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { isNotEmpty, isValidTaskTitle } from '../utils/validation';
import { saveToStorage } from '../utils/storageUtils';
import { formatDate } from '../utils/dateUtils';

export default function TaskScreen() {
  const [task, setTask] = useState('');

  const handleAddTask = async () => {
    if (!isNotEmpty(task) || !isValidTaskTitle(task)) {
      alert('Please enter a valid task title.');
      return;
    }

    const taskData = { title: task, date: formatDate(new Date()) };
    await saveToStorage('tasks', taskData);

    alert('Task added successfully!');
    setTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
