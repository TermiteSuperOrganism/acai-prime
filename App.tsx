import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import CoffeeCard from './components/DishCard';
import CustomButton from './components/CustomButton';
import DishCard from './components/DishCard';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage('Por favor, informe seu nome!')
    } else {
      setMessage(`${<Ionicons name="checkmark-circle" size={20} color="#2f2b2c"></Ionicons>}Olá, ${name}! Pedido iniciado com sucesso`)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView>
        <Header />

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
              source={require('./assets/featured-image.png')}
              style={styles.image} />
            <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
            <Text><Ionicons name="shopping-bag" size={20} color="#2f2b2c"></Ionicons>Mais pedido</Text>
            <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <Text style={styles.featuredPrice}>R$ 22,90</Text>
            <Text>Adicionar</Text>
          </View>
          {/*Card*/}
        </View>

        {/* Section */}
        <Text style={styles.sectionTitle}>Nossos copos e tigelas</Text>

        <View style={styles.menu}>
          <DishCard imageSrc={require('./assets/product-image.png')} name={'Açaí Tradicional'} description={'Açaí cremoso com banana e granola tradicional'} price={'14,00'}></DishCard>
          <DishCard imageSrc={require('./assets/product-image (1).png')} name={'Copo Tropical'} description={'Camadas de açaí, morango, kiwi e leite em pó'} price={'18,50'}></DishCard>
          <DishCard imageSrc={require('./assets/product-image (2).png')} name={'Vitamina de Açaí'} description={'Bebida energética batida com guaraná e aveia'} price={'12,00'}></DishCard>
          <DishCard imageSrc={require('./assets/product-image (3).png')} name={'Açaí Fit Zero'} description={'Zero adição de açúcar, com chia e castanhas'} price={'19,90'}></DishCard>
        </View>
        {/* Section */}

        <View style={styles.orderSection}>
          <Text style={styles.question}>Qual é o seu nome?</Text>
          <Ionicons name="person" size={20} color="#2f2b2c"></Ionicons>
          <TextInput style={styles.input}
            placeholder='Digite seu nome'
            value={name}
            onChangeText={setName} />

          <CustomButton title={'Fazer meu pedido'} onPress={handleOrder} />

          {message !== '' && (
            <Text style={styles.messageText}>{message}</Text>
          )}
        </View>
        {/*Body*/}
        {/* Footer */}
        <Footer></Footer>
        {/* Footer */}

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
    color: "#46295a",
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

  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#46295a",
    alignItems: "center",
    marginTop: 20
  }
});
