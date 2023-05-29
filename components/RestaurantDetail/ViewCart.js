import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {useSelector} from "react-redux";

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items);
    
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

        console.log(totalINR);

  return (
    <>
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
                    }}>
                <Text style={{color: "white", fontSize: 20, marginRight: 30}}>View Cart</Text>
                <Text style={{color: "white", fontSize: 20}}>{totalINR}</Text>
            </TouchableOpacity>
        </View>
    </View>
    ) : ( 
    <></>
    )}
    </>
  );
}