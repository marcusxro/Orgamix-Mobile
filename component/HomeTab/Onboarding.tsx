import { FlatList, StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '../slides/Slides'
import OnboardingItem from './OnboardingItem'

export default function Onboarding() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const handleViewableItemsChanged = ({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
        if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    };


    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return (
        <View className='flex justify-center items-center h-[70%]'>
            <View className='flex flex-3'>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => (
                        <OnboardingItem item={item} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false
                    })}
                    onViewableItemsChanged={handleViewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                    indicatorClassName='absolute bottom-10'
                />
            </View>
        </View>
    )
}

