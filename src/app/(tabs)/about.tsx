import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Image
        source={{
          uri: "https://media.tenor.com/HHZOPnpoWPMAAAAe/why-you-lying.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
});
