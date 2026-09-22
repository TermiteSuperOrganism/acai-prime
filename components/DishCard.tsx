import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type DishCardProps = {
    name: string;
    description: string;
    price: string;
};
export default function DishCard({ name, description, price }: DishCardProps) {
    return (
        
            <View style={styles.cardItem}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
                <Text style={styles.cardPrice}>R$ {price}</Text>
            </View>
        
    );
}
const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginBottom: 20
    },
    cardItem: {
        width: "48%",
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 3,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2F2D2C"
    },
    cardDescription: {
        fontSize: 12,
        color: "#9B9B9B",
        marginTop: 4,
        lineHeight: 16
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "800",
        color: "#46295a",
        marginTop: 12
    },
})
