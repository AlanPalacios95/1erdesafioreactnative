import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header/Header";
import InputAgregar from "./src/components/Input/TextImput";
import ListaProductos from "./src/components/Lista/List";
import RemoveModal from "./src/components/Alert/RemoveModal";

const DATA = [

];

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };

  const addItem = (name) => {
    const newItem = {
      name,
      id: new Date().getTime(),
    };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <InputAgregar onAdd={addItem} />
      <ListaProductos cartItems={cartItems} handleModal={handleModal} />
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192669",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    color: "white",
  },
});
