import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Açaí Prime • O sabor autêntico da Amazônia</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        footer: {
            padding: 20,
            alignItems: "center",
            marginBlock: 20
        },
        footerText: {
            fontSize: 14,
            fontWeight: "600",
            color: "#9b9b9b"
        }
    }
)