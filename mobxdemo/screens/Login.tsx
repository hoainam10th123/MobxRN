import { Button, Text, View } from "react-native";
import { useStore } from "../stores/stores";

export default function Login(){
    const { userStore } = useStore();

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'green', fontSize:30}}>Day la trang Login</Text>
            <Button onPress={()=>userStore.login(true)} title="Login"/>
        </View>
    )
}