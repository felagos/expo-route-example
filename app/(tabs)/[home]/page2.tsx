import { router } from "expo-router";
import { Button, View } from "react-native";

const Page2 = () => {
    return (
        <View>
            <Button title="Go to Page 1" onPress={() => router.push('/(tabs)/[home]/page1')} />
        </View>
    );
};

export default Page2;