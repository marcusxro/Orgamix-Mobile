import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button } from 'react-native'
import { FaEye } from "react-icons/fa";



export default function index() {
    return (
        <View className='bg-[#333] text-white h-screen flex gap-3 flex-col justify-center items-center p-5'>

            <View className='flex flex-col justify-center items-center bg-[#2e2e2e] border-[1px] border-[#535353] w-full p-5 rounded-md'>
                <Text className="text-white mb-3 font-semibold">
                    Please sign in with Orgamix your account
                </Text>


                <View className='w-full flex flex-col gap-3 mt-3'>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#888"
                        className="border-[1px] border-[#535353] w-full p-3 rounded-md  bg-[#111] text-white outline-none"
                    />

                  <View className="relative">
                  <TextInput
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry={true}
                        className="border-[1px] border-[#535353] w-full p-3 rounded-md  bg-[#111] text-white outline-none"
                    />

                    <View className="absolute right-3 top-3 text-[#888] cursor-pointer">
                        {/* <EyeIcon /> */}
                    </View>
                  </View>
                </View>

                <View className="flex gap-3 items-start w-full pl-1 my-3 ">
                    <Text className="text-[#888] flex gap-2">
                        Forgot password?

                        <Link
                            className="text-blue-500"
                            href='/signup'>Click Here!</Link>
                    </Text>

                </View>

                <TouchableOpacity
                    className="bg-[#242424] py-3 w-full  flex items-center justify-center py-2 rounded-md  border-[1px] border-[#414141] hover:bg-[#414141]"

                    onPress={() => console.log('TouchableOpacity Button Pressed!')}
                >
                    <Text className="text-[#888]"> Sign in</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}