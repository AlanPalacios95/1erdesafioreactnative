import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

const ListaProductos = ({ cartItems, handleModal }) => {
  return (
    <View style={styles.productList}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={{ width: 300, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.product}>{item.name}</Text>
            <Pressable onPress={() => handleModal(item.id)}>
              <Text
                style={{
                  backgroundColor: "red",
                  padding: 5,
                  borderRadius: 20,
                  marginLeft: 10,
                }}
              >
                {" "}
                X{" "}
              </Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    flex: 1,
  },
  product: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ListaProductos;
