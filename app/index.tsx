import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Button } from 'react-native'
import { FaEye } from "react-icons/fa";
import EyeIcon from '@/component/icons/Eye';
import EyeSlash from '@/component/icons/EyeSlash';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import IconComponent from '@/component/icons/IconComp';
import Onboarding from '@/component/HomeTab/Onboarding';
import AuthLayout from '@/component/HomeTab/AuthLayout';

export default function index() {

    const [showPassword, setShowPassword] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View className='bg-[#333] text-white h-screen p-5'>

  

            <AuthLayout />

        </View>
    )
}