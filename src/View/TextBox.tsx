import { ImageSourcePropType, TextInput, View, Image } from 'react-native';
import React from 'react';
import { STYLES } from '../Styles';
import { ICONS } from '../Assets/Icons/icons';

export type FormTextBoxProps = {
  currentValue?: string;
  onChange?(e: any): void;
  placeholder?: string;
  debounced?: boolean;
  style?: {
    container?: {};
    input?: {};
  };
  leftIcon?: boolean;
  maxLength?: number;
  multiline?: boolean;
  returnKeyLabel?: string;
  editable?: boolean;
  placeholderColor?: string;
  activeOpacity?: number;
  underline?: string;
};

const TextBox: React.FC<FormTextBoxProps> = (props: FormTextBoxProps): JSX.Element => {
  let timer: null | NodeJS.Timeout = null;

  const onChange = (value: string) => {
    if (props.debounced) {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(async () => {
        props.onChange && props.onChange(value);
      }, 300);
    } else {
      props.onChange && props.onChange(value);
    }
  };

  const containerStyles = props.style?.container !== void 0 ? props.style.container : {};
  const inputStyles = props.style?.input !== void 0 ? props.style.input : {};
  return (
    <View style={[STYLES.Layout.flex_row, STYLES.Layout.ai_c, containerStyles]}>
      {props.leftIcon && <Image style={[STYLES.Images.image20, STYLES.MP.mh10]} source={ICONS.searchPane} />}
      <TextInput
        style={inputStyles}
        onChangeText={onChange}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        multiline={props.multiline}
        returnKeyLabel={props.returnKeyLabel}
        editable={props.editable}
        placeholderTextColor={props.placeholderColor}
        underlineColorAndroid={props.underline}
      />
    </View>
  );
};

export { TextBox };
