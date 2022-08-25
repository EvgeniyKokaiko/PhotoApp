import React from 'react';
import { View, FlatList } from 'react-native';
import { STYLES } from '../Styles';
import { PhotoItemView } from '../View/PhotoItemView';
import {OwnPhotoModel, PhotoModel} from '../Types/models';
import { DefaultFlatListType } from '../Types';
import { FormTextBoxProps, TextBox } from '../View/TextBox';
import { EmptyView } from '../View/EmptyView';

export type favoritesComponentProps = {
  formBoxProperties: FormTextBoxProps;
  favorites: OwnPhotoModel[];
  isSearch: boolean;
  filteredItems: Array<OwnPhotoModel>;
};

const FavoritesComponent: React.FC<favoritesComponentProps> = ({ formBoxProperties, favorites, isSearch, filteredItems }) => {
  const _renderItem = ({ item }: DefaultFlatListType<OwnPhotoModel>) => {
    return <PhotoItemView isFilled={true} model={item} />;
  };

  return (
    <>
      <View style={[STYLES.Layout.container, STYLES.MP.ph15]}>
        <View>
          <TextBox {...formBoxProperties} />
        </View>
        <View style={[STYLES.MP.mb_bottomNavigation]}>
          <FlatList
            nestedScrollEnabled={true}
            numColumns={1}
            horizontal={false}
            bounces={true}
            ListEmptyComponent={<EmptyView message={'No Favorite Items!'} />}
            data={isSearch ? filteredItems : favorites}
            renderItem={_renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </>
  );
};

export default FavoritesComponent;
