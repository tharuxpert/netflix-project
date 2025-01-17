import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    Image,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "black",
                padding: 10,
                alignItems: "center",
            }}
        >
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Image
                        style={{ height: 50, width: 120, marginTop: 20 }}
                        source={{
                            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
                        }}
                    />
                </View>

                <View style={{ width: 320, marginTop: 45 }}>
                    <Input
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        type="email"
                        placeholder="E-mail"
                        placeholderTextColor={"white"}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "grey",
                        }}
                    />
                    <Input
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        type="password"
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={"white"}
                        inputContainerStyle={{ borderBottomWidth: 0 }}
                        style={{
                            width: 330,
                            padding: 15,
                            borderRadius: 5,
                            color: "white",
                            backgroundColor: "grey",
                        }}
                    />
                </View>

                <Pressable
                    style={
                        password.length > 4
                            ? {
                                width: 270,
                                backgroundColor: "red",
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 14,
                            }
                            : {
                                width: 270,
                                marginLeft: "auto",
                                marginRight: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                borderColor: "white",
                                borderWidth: 2,
                                padding: 14,
                            }
                    }
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 19,
                            fontWeight: "700",
                            color: "white",
                        }}
                    >
                        Sign In
                    </Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 19,
                            fontWeight: "600",
                            marginTop: 15,
                        }}
                    >
                        New to Netflix? Sign up now
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
