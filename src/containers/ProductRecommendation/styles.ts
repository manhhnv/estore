import { StyleSheet, PixelRatio } from 'react-native';

let FONT_BACK_LABEL   = 10.5;
if (PixelRatio.get() <= 2.5) {
  FONT_BACK_LABEL = 15;
}

export default StyleSheet.create({
    listProductName: {
        marginLeft: 10,
        marginTop: 50,
        marginBottom: 15,
        fontSize: FONT_BACK_LABEL,
        color: "#e68c00",
        textTransform: "uppercase",
        letterSpacing: 1,
        textDecorationLine: "underline"
    }
})