import { BottomSheet, Button, Column, Host } from "@expo/ui";
import { Text } from "@expo/ui/jetpack-compose";
import {
  background,
  height,
  paddingAll,
} from "@expo/ui/jetpack-compose/modifiers";
import { useState } from "react";
import { Text as RNText, StyleSheet, View } from "react-native";

export default function Profile() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <View style={styles.container}>
      <RNText style={styles.title}>Profile Screen</RNText>

      <Host matchContents>
        <Button label="Open Modal" onPress={() => setIsOpened(true)} />
        <Column
          modifiers={[height(500), paddingAll(16), background("#0066ff")]}
        >
          <BottomSheet
            isPresented={isOpened}
            onDismiss={() => setIsOpened(false)}
          >
            <Text
              // 1. Propriedades aceitas diretamente na raiz do componente
              maxLines={2}
              // 2. TUDO sobre a estilização da fonte vai dentro de 'style'
              style={{
                typography: "headlineMedium", // Substitui o 'variant' anterior
                color: "#FF5733", // A cor deve ser declarada estritamente aqui
              }}
              // 3. Propriedades de layout ao redor da caixa de texto
              modifiers={[paddingAll(8)]}
            >
              Meu Texto Nativo
            </Text>
          </BottomSheet>
        </Column>
      </Host>
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
});
