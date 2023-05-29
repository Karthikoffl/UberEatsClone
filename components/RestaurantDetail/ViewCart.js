import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
    
    // '₹13.50'
    // '13.50'
    // Number['13.50'] 👉 13.5
    // [13.5, 20.5, 19.5]
    // reduce 👉 [13.5, 20.5, 19.5]
    // reduce 👉 13.5 + 20.5 + 19.5 👉 43.5

    const total = items
        .map((item => Number(item.price.replace('₹', ''))))
        .reduce((prev, curr) => prev + curr, 0);

        const totalINR = total.toLocaleString('en', {
            style: 'currency',
            currency: "INR",
        });

        const addOrderToFirebase = () => {
            setLoading(true);
            const db = firebase.firestore();
            db.collection("orders").add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(() => {
                setTimeout(() => {
                    setLoading(false);
                    navigation.navigate("OrderCompleted"); 
                }, 2500);
            });
        };

        const styles = StyleSheet.create({
            modalContainer: {
                flex: 1,
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
            modalCheckoutContainer: {
                backgroundColor: '#fff',
                padding: 16,
                height: 500,
                borderWidth: 1,
            },
            restaurantName: {
                textAlign: 'center',
                fontWeight: '600',
                fontSize: 18,
                marginBottom: 10,
            },
            subtotalCotainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
            },
            subtotalText: {
                textAlign: 'left',
                 fontWeight: '600',
                 fontSize: 15,
                 marginBottom: 10,
            },
        });

        const checkOutModalContent = () => {
            return (
              <>
              <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OrderItem key={index} item={item} />
                    ))}
                    <View style={styles.subtotalCotainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>{totalINR}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity 
                            style={{
                                marginTop: 20, 
                                backgroundColor: 'black', 
                                alignItems: 'center', 
                                padding: 13,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            onPress={() => {
                                addOrderToFirebase();
                                setModalVisible(false);
                            }}
                        >
                            <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                            <Text 
                                style={{
                                    position: 'absolute', 
                                    color: 'white', 
                                    fontSize: 15,
                                    right: 20, 
                                    top: 17,
                                }}
                            >
                                {total ? totalINR : ''}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
              </View>
              </>  
            );
        };

  return (
    <>
    <Modal 
        animationType='slide' 
        visible={modalVisible} 
        transparent={true} 
        onRequestClose={() => setModalVisible(false)}>
            {checkOutModalContent()}
        </Modal>
    {total ? (
    <View 
        style={{
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'row', 
            position: 'absolute', 
            bottom: -70, 
            zIndex: 999,
            }}>
        <View 
            style={{
                flexDirection: 'row', 
                justifyContent: 'center', 
                width: '100%',
                }}>
            <TouchableOpacity 
                style={{
                    marginTop: 20, 
                    flexDirection: 'row',
                    backgroundColor: "black", 
                    justifyContent: "flex-end", 
                    padding: 15, 
                    borderRadius: 30, 
                    width: 300, 
                    position: 'relative',
                }}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{color: "white", fontSize: 20, marginRight: 30}}>View Cart</Text>
                <Text style={{color: "white", fontSize: 20}}>{totalINR}</Text>
            </TouchableOpacity>
        </View>
    </View>
    ) : ( 
    <></>
    )}
    {loading ? (<View style={{
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    }}>
        <LottieView 
            style={{height: 200}}
            source={require("../../assets/animations/scanner.json")}
            autoplay
            speed={3}
        />
    </View>
    ) : (
    <></>
    )} 
    </>
  );
}