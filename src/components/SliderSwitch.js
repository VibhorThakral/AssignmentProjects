import React, { useState } from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import Slider from '@react-native-community/slider';

const SliderSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sliderValue, setValue] = useState(1);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    setValue(0);
  }
  

  return (
    <View style={styles.container}>
      <Switch 
        style={styles.Switch}
        trackColor = {{ false: "gray", true: "#3498db" }}
        thumbColor = {isEnabled ? "#f1c40f" : "#2c3e50"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {
        isEnabled ? (
            <View style={styles.SliderContainer}>
              <Slider 
                minimumValue = {0}
                maximumValue = {100}
                value={0}
                step={1}
                style={styles.SliderMain}
                onSlidingComplete={setValue}
            />
              <Text style={styles.SliderText}>Slider Value: {sliderValue}</Text>
            </View>
        ) : null
      } 
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  Switch: {
    position: 'absolute',
    top: 300,
    transform:[{scale: 1.5}]
  },  
  SliderContainer: {
    marginTop: 30
  },  
  SliderMain : {
    width: 200,
    height: 40,
  },  
  SliderText : {
    color: 'black',
    textAlign: 'center',
    fontSize: 20
  }
})

export default SliderSwitch;

