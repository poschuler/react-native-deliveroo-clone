import { Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Categories from "@/components/categories";
import { SafeAreaView } from "react-native-safe-area-context";
import Restaurants from "@/components/restaurants";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near your</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 90,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
