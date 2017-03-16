import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "pagenavigate": {
        "border": "1 solid #78cdd1",
        "width": 20,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "backgroundColor": "#90d7ec",
        "float": "left",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2
    },
    "pagenext": {
        "border": "1 solid #78cdd1",
        "width": 40,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "float": "left",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "pagelast": {
        "border": "1 solid #78cdd1",
        "width": 40,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "float": "left",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "pagefirst": {
        "border": "1 solid #78cdd1",
        "width": 40,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "float": "left",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "pagepre": {
        "border": "1 solid #78cdd1",
        "width": 40,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "float": "left",
        "marginTop": 0,
        "marginRight": 1,
        "marginBottom": 0,
        "marginLeft": 1
    },
    "pagenavigate a": {
        "width": 20,
        "height": 20,
        "color": "#fffef9",
        "textDecoration": "none"
    },
    "pagenext a": {
        "width": 40,
        "height": 20,
        "color": "#009ad6",
        "fontSize": 12,
        "textDecoration": "none"
    },
    "pagelast a": {
        "width": 40,
        "height": 20,
        "color": "#009ad6",
        "fontSize": 12,
        "textDecoration": "none"
    },
    "pagefirst a": {
        "width": 40,
        "height": 20,
        "color": "#009ad6",
        "fontSize": 12,
        "textDecoration": "none"
    },
    "pagepre a": {
        "width": 40,
        "height": 20,
        "color": "#009ad6",
        "fontSize": 12,
        "textDecoration": "none"
    },
    "contents": {
        "height": 150
    },
    "pagenavigateon": {
        "border": "1 solid #78cdd1",
        "width": 20,
        "height": 20,
        "lineHeight": 20,
        "textAlign": "center",
        "color": "#ff0000!important",
        "backgroundColor": "#90d7ec"
    },
    "pagenavigateon a": {
        "color": "#ff0000",
        "textDecoration": "none"
    },
    "filter-tag": {
        "display": "inline-block",
        "height": 22,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "marginRight": 16,
        "border": "1px solid #f04848",
        "borderRadius": 2,
        "lineHeight": 22,
        "cursor": "default",
        "color": "#333"
    }
});