import React from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
// Importing the background image
import BackgroundImage from '../img/Background_Image.png';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      backGroundColor: this.colors.grey,
    };
  }

  // Background colors to choose from
  colors = {
    black: '#090C08',
    violet: '#474056',
    grey: '#8A95A5',
    green: '#B9C6AE',
  };

  // This function is used to change the background color state for the chat screen
  changebackGroundColor = (color) =>
    this.setState({ backGroundColor: color });

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>

          <View style={styles.titleBox}>
            <Text style={styles.title}>Chat App</Text>
          </View>

          <View style={styles.box1}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
                placeholder='Type your name ...'
              />
            </View>

            <View style={styles.colorBox}>
              <Text style={styles.chooseColor}>
                {" "}
                Pick your background color:
              </Text>
            </View>

            {/* Here the user can change the background color for the "Chat" screen */}
            <View style={styles.colorArray}>
              <TouchableOpacity
                style={styles.color1}
                onPress={() => this.changebackGroundColor(this.colors.black)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color2}
                onPress={() => this.changebackGroundColor(this.colors.violet)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color3}
                onPress={() => this.changebackGroundColor(this.colors.grey)}
              ></TouchableOpacity>
              <TouchableOpacity
                style={styles.color4}
                onPress={() => this.changebackGroundColor(this.colors.green)}
              ></TouchableOpacity>
            </View>

            {/* This button once pressed, the user will be redirected to the "Chat" screen */}
            <Pressable
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("Chat", {
                  name: this.state.name,
                  backGroundColor: this.state.backGroundColor,
                })
              }
            >
              <Text style={styles.buttonText}>Start Chat</Text>
            </Pressable>

          </View>
        </ImageBackground >
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "88%",
    height: 70,
    borderRadius: 8,
    backgroundColor: "#757083",
    alignItems: "center",
    justifyContent: "center",
  },
  titleBox: {
    height: "40%",
    width: "88%",
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  box1: {
    backgroundColor: "#FFFFFF",
    height: "44%",
    width: "88%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  colorBox: {
    marginRight: "auto",
    paddingLeft: 15,
    width: "88%",
  },
  chooseColor: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 100,
  },
  inputBox: {
    borderWidth: 2,
    borderRadius: 1,
    borderColor: "grey",
    width: "88%",
    height: 60,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
  },
  colorArray: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  color1: {
    backgroundColor: "#090C08",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color2: {
    backgroundColor: "#474056",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color3: {
    backgroundColor: "#8A95A5",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  color4: {
    backgroundColor: "#B9C6AE",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});