import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const GoalItem = props => {
    console.log("props.id", props.id)
    return (
        // on touch we are going to delete item
        <TouchableOpacity onPress={() => props.onDelete(props.id)}>
            <View style={styles.listGoal}>
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    listGoal: {
        padding: 10,
        borderColor: 'blue',
        borderWidth: 2,
        backgroundColor: 'white',
        color: 'blue',
        fontSize: 20,
        marginTop: 10
    }
})

export default GoalItem