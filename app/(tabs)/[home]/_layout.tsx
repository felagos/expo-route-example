import { Stack } from "expo-router";

const PageLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="page1" />
            <Stack.Screen name="page2" />
        </Stack>
    );
};

export default PageLayout;