import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setcourseGoal] = useState([]);
  const [addnewGoal, setaddnewGoal]=useState(false)

  // add goal

  const addGoal = (goalTitle) => {
    // if(goalTitle.length === 0){
    //   return false;
    // }
    console.log("goalTitle",goalTitle.length)
    setcourseGoal(courseGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setaddnewGoal(false);
  }

  // delete goal

  const deleteHandler = (goalId) => {
    console.log(">>", goalId)
    console.log("courseGoals", courseGoals)
    setcourseGoal(courseGoals => {
      return courseGoals.filter((goal) => goal.id !== goalId)
    });
  }

  // add new goal

  const addnewGoalHandler =()=>{
    setaddnewGoal(true);
  }

  // cancel modal

  const onCloseGoalhandler =()=>{
    setaddnewGoal(false);
  }

  return (
    <View style={styles.container} >
      <Button onPress={addnewGoalHandler} title="ADD NEW GOAL"/>
      <GoalInput visible={addnewGoal} onAddGoal={addGoal} onCancel={onCloseGoalhandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) =>
          // console.log("itemdata",itemData)}
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={deleteHandler} />}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  textContainer: {
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  listGoalContainer: {
    marginTop: 10
  },

});
