import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, ImageSourcePropType, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type DishCardProps = {
    imageSrc: ImageSourcePropType;
    name: string;
    description: string;
    price: string;
};
export default function DishCard({ imageSrc,name, description, price }: DishCardProps) {
    return (
        
            <View style={styles.cardItem}>
                <Image 
                    source={imageSrc}
                    style={styles.image}/>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
                <Text style={styles.cardPrice}>R$ {price}</Text>
                <Ionicons name='plus-circle' size={20} color="#2f2b2c"></Ionicons>
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
    image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
})
