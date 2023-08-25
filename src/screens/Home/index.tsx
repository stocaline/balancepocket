import { useState, useCallback } from "react"
import { StyleSheet, SafeAreaView, Text, } from "react-native"
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function Home() {

    useFocusEffect(useCallback(() => {
    }, []))

    return (
        <SafeAreaView style={styles.container}>
           <Text>APP FINANCEIRO</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})