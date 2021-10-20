import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Course Goal' 
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default GoalInput;
