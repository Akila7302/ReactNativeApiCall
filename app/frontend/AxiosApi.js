import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import axios from "axios";

function AxiosApi() {
  let [quote, setQuote] = React.useState("");
  let [source, setSource] = React.useState("");

  const axiosApiCall = () => {
    axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "2908770ea1msh6561dd19dafd7d5p1b09a7jsn8642780d60f1",
        useQueryString: true,
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setQuote(response.data.content);
        setSource(response.data.originator.name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with fetch and Axios</Text>

      {/* <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Fetch API</Text>
        </View>
      </TouchableHighlight> */}

      <TouchableHighlight onPress={axiosApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Axios</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{quote}</Text>
        <Text>{source}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AAA",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  title: {
    fontSize: 35,
    color: "#fff",
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#0645AD",
  },
  buttonText: {
    color: "#fff",
  },
});

export default AxiosApi;
