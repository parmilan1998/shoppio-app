import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 justify-center items-center bg-blue-500">
          <Text className="text-white text-lg font-bold">Shoppio!...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
