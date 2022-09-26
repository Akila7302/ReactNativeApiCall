import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import ItemPicker from "../components/ItemPicker";
import axios from "axios";

function MlForm2() {
  const [id, setId] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      id,
      month,
      day,
      time,
    };

    axios
      .post("https://tripora.herokuapp.com/prediction", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
        // setQuote(res.data.prediction);
        alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <View style={styles.view1}>
      <Text style={{ textAlign: "center" }}>Time predictor</Text>

      <View style={styles.inputview}>
        <TextInput label="ID" value={id} onChangeText={(text) => setId(text)} />
      </View>

      <View style={styles.inputview}>
        <TextInput
          label="Month"
          value={month}
          onChangeText={(text) => setMonth(text)}
        />
      </View>

      <View style={styles.inputview}>
        <TextInput
          label="Day"
          value={day}
          onChangeText={(text) => setDay(text)}
        />
      </View>

      <View style={styles.inputview}>
        <TextInput
          label="Time"
          value={time}
          onChangeText={(text) => setTime(text)}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={(e) => handleSubmit(e)}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MlForm2;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  view1: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  inputview: {
    padding: 10,
    borderWidth: 5,
    borderColor: "black",
  },
  btnText: {
    fontSize: 18,
    letterSpacing: 1.5,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "white",
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 10,
    width: "50%",
  },
});
