import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ItemPicker from "../components/ItemPicker";
import axios from "axios";
import { Formik } from "formik";

const locations = [
  { label: "location_Sigiriya", value: "location_Sigiriya" },
  { label: "location_TempleOfTheTooth", value: "location_TempleOfTheTooth" },
  { label: "location_Sripadaya", value: "location_Sripadaya" },
  {
    label: "location_DambullaCaveTemple",
    value: "location_DambullaCaveTemple",
  },
  {
    label: "location_RoyalBotanicGardens",
    value: "location_RoyalBotanicGardens",
  },
  {
    label: "location_PinnawalaElephantOrphanage",
    value: "location_PinnawalaElephantOrphanage",
  },
  { label: "location_AluviharayaCaveTemple", value: "location_RuwanweliSeya" },
  { label: "location_Isurumuniya", value: "location_Isurumuniya" },
];

const months = [
  { label: "January", value: 1 },
  { label: "Feburary", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const days = [
  { label: "Monday", value: 1 },
  { label: "Tuesday", value: 2 },
  { label: "Wednesday", value: 3 },
  { label: "Thursday", value: 4 },
  { label: "Friday", value: 5 },
  { label: "Saturday", value: 6 },
  { label: "Sunday", value: 7 },
];

const times = [
  { label: "00:00", value: 0 },
  { label: "01:00", value: 1 },
  { label: "02:00", value: 2 },
  { label: "03:00", value: 3 },
  { label: "04:00", value: 4 },
  { label: "05:00", value: 5 },
  { label: "06:00", value: 6 },
  { label: "07:00", value: 7 },
  { label: "08:00", value: 8 },
  { label: "09:00", value: 9 },
  { label: "10:00", value: 10 },
  { label: "10:00", value: 11 },
  { label: "12:00", value: 12 },
  { label: "13:00", value: 13 },
  { label: "14:00", value: 14 },
  { label: "15:00", value: 15 },
  { label: "16:00", value: 16 },
  { label: "17:00", value: 17 },
  { label: "18:00", value: 18 },
  { label: "19:00", value: 19 },
  { label: "20:00", value: 20 },
  { label: "21:00", value: 21 },
  { label: "22:00", value: 22 },
  { label: "23:00", value: 23 },
];

function MlForm({ onPress }) {
  const [location, setLocation] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  let [displaytext, setDisplaytext] = React.useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const params = {
      location,
      month,
      day,
      time,
    };

    axios
      .post("http://localhost:8080/prediction", params)
      .then((res) => {
        const data = res.data.data;
        const parameters = JSON.stringify(params);
        const msg = `Parameters: ${parameters}\nPrediction: ${data.prediction}`;
        alert(msg);
        // reset();
      })
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <View style={styles.view1}>
      <Text style={{ textAlign: "center" }}>Time predictor</Text>

      <ItemPicker
        selectedItem={location}
        onSelectItem={(item) => setLocation(item)}
        items={locations}
        icon="apps"
        name="location"
        placeholder="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        // onChange={(e) => setLocation(e.target.value)}
      />
      <ItemPicker
        selectedItem={month}
        onSelectItem={(item) => setMonth(item)}
        items={months}
        icon="apps"
        name="month"
        placeholder="Month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        // onChange={(e) => setMonth(e.target.value)}
      />
      <ItemPicker
        selectedItem={day}
        onSelectItem={(item) => setDay(item)}
        items={days}
        icon="apps"
        name="day"
        placeholder="Day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        // onChange={(e) => setDay(e.target.value)}
      />
      <ItemPicker
        selectedItem={time}
        onSelectItem={(item) => setTime(item)}
        items={times}
        icon="apps"
        name="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        // onChange={(e) => setTime(e.target.value)}
      />

      <TouchableOpacity style={styles.btn} onPress={(e) => handleSubmit(e)}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <View>
        <Text>{displaytext}</Text>
      </View>
    </View>
  );
}

export default MlForm;

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
