import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';



interface OnboardingItemProps {
    item: {
        title: string;
        description: string;
        image: string;
    };
}

export default function OnboardingItem({
    item
}: OnboardingItemProps) {

    const { width, height } = useWindowDimensions();

    return (
        <View
            className='flex flex-col  justify-center items-center '
            style={{ width, height }}>
            <Image
                source={{ uri: item.image }}
                style={{
                    width: width, // Ensure it takes the full width
                    height: height * 0.4, 
                    resizeMode: 'cover', // Keep aspect ratio of the image
                }}
            />
            <View className=" justify-center items-center">
                <Text className="text-2xl font-bold text-white">{item.title}</Text>
                <Text className="text-center text-[#888] text-sm">{item.description}</Text>
            </View>
        </View>
    );
}
