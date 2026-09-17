import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeeCard from './components/DishCard';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView>
        <Header/>

        {/*Body*/} 
        <View style={styles.content}>

          {/*Title*/} 
          <View style={styles.contentInitial}>
            <Text style={styles.contentTitle}>Refresque seu dia!</Text>
            <Text style={styles.contentSubtitle}>Escolha seu açaí favorito de hoje</Text>
          </View>
          {/*Title*/}

          {/*Card*/}
          <View style={styles.featured}>
            <Image 
            source={require('#')}
            style={styles.image}/>
          </View>
          <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
          <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
          <Text style={styles.featuredPrice}>R$ 22,90</Text>
          {/*Card*/}
        </View>
        {/*Body*/} 

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 24,
  },
  contentInitial: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  contentSubtitle: {
    fontSize: 16,
    color: "#9B9B9B",
    marginTop: 8
  },

  //Card
  featured: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  featuredDescription: {
    fontSize: 14,
    color: "#9B9B9B",
    marginTop: 4
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: "#C67C4E",
    marginTop: 8
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2F2D2C",
    marginBottom: 16
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20
  },
  orderSection: {
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10
  },
  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  
  messageText:{
    fontSize: 16,
    fontWeight:"800",
    color: "#c67c4e",
    alignItems: "center",
    marginTop: 20
  }
});
