/*
 * @Author: kanglang
 * @Date: 2021-06-05 09:51:24
 * @LastEditors: kanglang
 * @LastEditTime: 2022-01-28 17:24:50
 * @Description: 按钮
 */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
const vWidth = Dimensions.get('window').width;
const vHeight = Dimensions.get('window').height;

// 添加pxToDp
// UI图设计基准大小
const uiWidthPx = 750;

function px2dp(uiElementPx) {
    if (vWidth > vHeight) {
        return (uiElementPx * vHeight) / uiWidthPx;
    }
    return (uiElementPx * vWidth) / uiWidthPx;
}
const OpacityButton = ({
    text = '按钮',
    onPress,
    style,
    txtStyle
}) => {
    onHandle = () => {
        onPress && onPress();
    }
    return (
        <TouchableOpacity
            style={[styles.btnBox, style]}
            onPress={onHandle}
        >
            <Text style={[styles.btnTip, txtStyle]}>{text}</Text>
        </TouchableOpacity>
    );

}
export default OpacityButton;

const styles = StyleSheet.create({
    btnBox: {
        backgroundColor: '#ffffff',
        borderRadius: px2dp(8),
        marginRight: px2dp(16),
        marginBottom: px2dp(16),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: px2dp(20),
        paddingHorizontal:px2dp(32)
    },
    btnTip: {
        color: '#000000',
        fontSize: px2dp(28)
    }
});
