import { router } from "expo-router";
import { Button, View } from "react-native";

const Page1 = () => {
    return (
        <View>
            <Button title="Go to Page 2" onPress={() => router.push('/(tabs)/[home]/page2')} />
        </View>
    );
};

export default Page1;