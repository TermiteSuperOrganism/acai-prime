import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}
export default function CustomButton({ title, onPress }: CustomButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#c67c4e",
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#ffffff",

    },
})