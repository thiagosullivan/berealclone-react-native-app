import { Button, Host } from "@expo/ui/jetpack-compose";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>

      <Link href={"/about"}>Go to about</Link>

      <Host style={styles.btn}>
        <Button onClick={() => router.push("/about")}>
          <Text style={styles.btnText}>Clique aqui</Text>
        </Button>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa", // Fundo do app levemente cinza (mais elegante que branco puro)
  },
  title: {
    color: "#1a1a1a", // Cinza escuro premium em vez de vermelho puro
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20, // Espaço entre o título e o botão
  },
  btn: {
    backgroundColor: "#007AFF", // Azul moderno (padrão iOS/Android premium)
    paddingVertical: 12, // Espaçamento interno em cima e embaixo
    paddingHorizontal: 28, // Espaçamento interno nas laterais
    borderRadius: 8, // Cantos suavemente arredondados
    elevation: 2, // Sombra leve no Android
    shadowColor: "#000", // Sombra leve no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff", // Texto branco puro para alto contraste e leitura limpa
    fontSize: 16,
    fontWeight: "600", // Texto semi-negrito para dar destaque
    letterSpacing: 0.5, // Pequeno espaçamento entre as letras
  },
});
