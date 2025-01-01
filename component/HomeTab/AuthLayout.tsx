import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AuthLayout() {
    return (
        <View className="h-[60%] bg-black w-full">
            <View 
            style={{
               gap: '5px',
               display: 'flex',
                flexDirection: 'row',
            }}>
                <TouchableOpacity className="m-2 sp-5 border-[1px] border-[#535353] flex-1 bg-[#2e2e2e] items-center justify-center rounded-md mr-5">
                    <Text className="text-white">Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity className="p-5 border-[1px] border-[#535353] flex-1 bg-[#2e2e2e] items-center justify-center rounded-md">
                    <Text className="text-white">Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
