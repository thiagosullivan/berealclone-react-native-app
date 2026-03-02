import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About() {
  const route = useRouter();
  return (
    <View style={styles.container}>
      <Text>about page</Text>
      <Button
        title="Back to page"
        onPress={() => route.push("/(tabs)/profile")}
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
});
