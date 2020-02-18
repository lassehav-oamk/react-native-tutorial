import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default class ImagePickAndSend extends Component {

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  render() {
    return (
      <View>
        <Text> Image Picker </Text>

        <TouchableOpacity onPress={this.openImagePickerAsync} style={{ borderWidth: 1, borderColor: 'black'}}>
          <Text>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
