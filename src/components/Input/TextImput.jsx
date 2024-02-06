import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

const InputAgregar = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => setInputValue(value);

  const addItem = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        style={styles.input}
        placeholder="Ingrese un producto"
      />
      <Pressable onPress={addItem}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: "#294a60",
    marginRight: 10,
    padding: 10,
    color: "white",
  },
});

export default InputAgregar;