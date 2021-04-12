import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Button, Modal } from 'react-native';
const GoalItem = props => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const changeText = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const onAddGoalhandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal(' ');
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textContainer}
                    onChangeText={changeText}
                    value={enteredGoal}
                />
                <View style={styles.modulebutton}>
                    <View style={styles.buttonWidth}>
                        <Button title="Add" onPress={onAddGoalhandler} />
                    </View>
                    <View style={styles.buttonWidth}>
                        <Button title="Cancel" onPress={props.onCancel} color="red" />
                    </View>
                </View>

            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    textContainer: {
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    modulebutton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
    },
    buttonWidth: {
        width: '40%'
    }
})

export default GoalItem