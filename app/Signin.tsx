import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Button } from 'react-native'
import { FaEye } from "react-icons/fa";
import EyeIcon from '@/component/icons/Eye';
import EyeSlash from '@/component/icons/EyeSlash';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import IconComponent from '@/component/icons/IconComp';

export default function Signin() {

    const [showPassword, setShowPassword] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className='bg-[#333] text-white h-screen flex gap-3 flex-col justify-center items-center p-5'>

            <View className='flex flex-col justify-center items-center bg-[#2e2e2e] border-[1px] border-[#535353] w-full p-5 rounded-lg max-w-[500px]'>
                <Text className="text-white mb-3 font-semibold">
                    Please sign in with Orgamix your account
                </Text>


                <View className='w-full flex flex-col gap-3 mt-3'>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        className="border-[1px] border-[#535353] w-full p-3 rounded-md  bg-[#111] text-white outline-none"
                    />

                    <View className="relative">
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            secureTextEntry={!showPassword}
                            className="border-[1px] border-[#535353] w-full p-3 rounded-md  bg-[#111] text-white outline-none"
                        />

                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[13px] text-[#888] cursor-pointer">

                            {
                                showPassword ? <EyeSlash /> : <EyeIcon />
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex-row items-center w-full pl-1 my-3">
                    <Text className="text-gray-500 mr-2">Forgot password?</Text>
                    <Link className="text-blue-500" href="/signup">
                        Click Here!
                    </Link>
                </View>

                <TouchableOpacity
                    className="bg-[#242424] py-3 w-full  flex items-center justify-center  rounded-md  border-[1px] border-[#414141] hover:bg-[#414141]"

                    onPress={() => console.log('TouchableOpacity Button Pressed!')}
                >
                    <Text className="text-[#888]"> Sign in</Text>
                </TouchableOpacity>


                <View className="flex-row items-center gap-3 my-3 w-full">
                    <View className="h-[2px] bg-[#535353] flex-1" />
                    <Text className="text-[#888] mb-1">or</Text>
                    <View className="h-[2px] bg-[#535353] flex-1" />
                </View>


                <View className="flex-row flex-wrap w-full gap-3">
                    <TouchableOpacity
                        className="hover:bg-[#222] flex-row gap-3 w-full bg-[#242424] py-3 items-center justify-center rounded-md border border-[#414141] active:bg-[#414141]"
                        onPress={() => console.log('Sign in with Google pressed!')}
                    >

                        <IconComponent name="google" size={15} color="#888" />
                        <Text className="text-[#888]">Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="hover:bg-[#222] flex-row gap-3 w-full bg-[#242424] py-3 items-center justify-center rounded-md border border-[#414141] active:bg-[#414141]"
                        onPress={() => console.log('Google pressed!')}
                    >
                        <IconComponent name="google" size={15} color="#888" />
                        <Text className="text-[#888]">Discord</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="hover:bg-[#222] flex-row gap-3 w-full bg-[#242424] py-3 items-center justify-center rounded-md border border-[#414141] active:bg-[#414141]"
                        onPress={() => console.log('Google pressed!')}
                    >
                                    <IconComponent name="github" size={15} color="#888" />
                        <Text className="text-[#888]">Github</Text>
                    </TouchableOpacity>
                </View>



            </View>



        </View>
    )
}