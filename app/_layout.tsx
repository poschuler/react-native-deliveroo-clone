import CustomHeader from "@/components/custom-header";
import Colors from "@/constants/Colors";
import {
  BottomSheetModalProvider,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { Stack, useNavigation } from "expo-router";
import { TransitionPresets } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { JsStack } from "@/components/js-stack";
import { Ionicons } from "@expo/vector-icons";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack
        // screenOptions={{
        //   //animationEnabled: true,
        //   //headerShown: false,
        //   gestureEnabled: true,
        //   //...TransitionPresets.ModalPresentationIOS,
        //   //presentation: "modal",
        // }}
        >
          <Stack.Screen
            name="index"
            options={{
              header: () => <CustomHeader />,
            }}
          />

          <Stack.Screen
            name="(modal)/location-search"
            options={{
              //...TransitionPresets.BottomSheetAndroid,
              presentation: "fullScreenModal",
              headerTitle: "Select location",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={{ marginLeft: 10 }}
                >
                  <Ionicons
                    name="close-outline"
                    size={25}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/filter"
            options={{
              //...TransitionPresets.ModalPresentationIOS,
              presentation: "modal",
              headerTitle: "Filter",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={{ marginLeft: 10 }}
                >
                  <Ionicons
                    name="close-outline"
                    size={25}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="(modal)/dish"
            options={{
              //...TransitionPresets.ModalPresentationIOS,
              presentation: "modal",
              headerTitle: "",
              headerTransparent: true,
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    padding: 6,
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={25}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen
            name="basket"
            options={{
              headerTitle: "Basket",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="arrow-back"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
