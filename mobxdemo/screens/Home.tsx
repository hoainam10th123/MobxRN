import { Button, Text, View } from "react-native";
import { useStore } from "../stores/stores";

export default function Home(){
    const { userStore } = useStore();
    
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'red', fontSize:30}}>Day la trang home</Text>
            <Button onPress={()=>userStore.login(false)} title="Logout"/>
        </View>
    )
}