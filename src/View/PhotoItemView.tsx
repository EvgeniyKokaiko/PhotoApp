import React, { useState } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { STYLES } from '../Styles';
import { PhotoModel } from '../Types/models';
import { useAppDispatch, useCombinedRedux } from '../Hooks/redux';
import { ICONS } from '../Assets/Icons/icons';
import { photosActions } from '../Store/reducers/PhotosReducer';

type photoItemViewProps = {
  model: PhotoModel;
  isFilled: boolean;
};

const PhotoItemView: React.FC<photoItemViewProps> = ({ model, isFilled }) => {
  const [getState, setState] = useState<any>({});
  const dispatch = useAppDispatch();
  const onLikePress = () => {
    dispatch(photosActions.manage_favorites(model));
  };

  return (
    <View style={[STYLES.MP.mb20]}>
      <View style={[STYLES.Layout.flex_row, STYLES.Layout.jc_sb, STYLES.MP.mb10]} />
      <View style={[STYLES.MP.mb10]}>
        <Text style={[STYLES.Texts.PhotoItemCaption]}>Caption: {model.title}</Text>
      </View>
      <View>
        <Image style={STYLES.Images.photoItemImage} source={{ uri: model.url }} />
      </View>
      <View style={[STYLES.Layout.jc_fe, STYLES.Layout.flex_row, STYLES.MP.mt10, STYLES.MP.mb20]}>
        <TouchableOpacity
          onPress={onLikePress}
          style={[STYLES.Buttons.photoItemLikeButton, STYLES.Layout.flex_row, STYLES.Layout.ai_c, STYLES.MP.mr20]}
        >
          <Image style={[STYLES.Layout.wh100, STYLES.Layout.rm_c]} source={isFilled ? ICONS.heartFilled : ICONS.heartOutline} />
        </TouchableOpacity>
      </View>
      <View style={STYLES.Buttons.horizontalLine} />
    </View>
  );
};

export { PhotoItemView };
