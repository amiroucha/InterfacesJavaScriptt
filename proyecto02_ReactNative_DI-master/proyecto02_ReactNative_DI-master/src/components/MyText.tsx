import{Text, type TextProps} from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import { Children } from "react";

interface Props extends TextProps{tamanio: 'h1' | 'h2' | 'h3'}



export const MyText = ({children, tamanio,...rest}:Props) => {
    return(
        <Text {...rest} numberOfLines={1} adjustsFontSizeToFit style={[tamanio === 'h1' ?GlobalStyles.h1:null,
        tamanio === 'h2' ?GlobalStyles.h2:null,
        tamanio === 'h3' ?GlobalStyles.h3:null
        ]}>
            
            {children}
        </Text>
    )
} 