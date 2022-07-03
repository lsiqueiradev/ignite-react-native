import { StyleSheet, ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";


interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  isLoading: boolean;
}

export function Button({ onPress, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
      {...rest}
    >
      {isLoading ?
        <ActivityIndicator
          size="small"
          color="#FFFFFF"
        /> :
        <Text style={styles.buttonText}>Add</Text>
      }

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff2d55',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});