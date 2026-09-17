import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Café do Código</Text>
                <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
            </View>

            <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={20} color="#2f2b2c"></Ionicons>
            </View>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        header: {
            width: '100%',
            paddingTop: 60,
            paddingHorizontal: 24,
            paddingBottom: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        headerTitle: {
            fontSize: 22,
            fontWeight: '800',
            color: "#2F2D2C"
        },
        headerSubtitle: {
            fontSize: 14,
            color: "#9B9B9B",
            marginTop: 4
        },
        avatarPlaceholder: {
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: "#F0F0F0",
            justifyContent: "center",
            alignItems: "center"
        },
    }
)