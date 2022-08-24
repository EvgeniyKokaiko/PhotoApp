import React from 'react';
import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { DefaultFlatListType } from '../Types';
import { PhotoModel } from '../Types/models';
import { PhotoItemView } from '../View/PhotoItemView';
import { STYLES } from '../Styles';
import { FormTextBoxProps, TextBox } from '../View/TextBox';
import { BaseHeaderView } from '../View/BaseHeaderView';
import { photoInitialStateType } from '../Store/reducers/PhotosReducer';
import { EmptyView } from '../View/EmptyView';
import PreloaderView from '../View/PreloaderView';

export type photosComponentProps = {
  formBoxProperties: FormTextBoxProps;
  data: photoInitialStateType;
  onRefresh(): void;
  refreshing: boolean;
  isSearch: boolean;
  filteredItems: Array<PhotoModel>;
};

const PhotosComponent: React.FC<photosComponentProps> = ({ formBoxProperties, data, refreshing, onRefresh, isSearch, filteredItems }) => {
  const _renderItem = ({ item }: DefaultFlatListType<PhotoModel>) => {
    return <PhotoItemView isFilled={false} model={item} />;
  };
  return (
    <View style={STYLES.Layout.container}>
      <BaseHeaderView label={'Photos'} />
      <View>
        <TextBox {...formBoxProperties} />
      </View>
      <View style={[STYLES.MP.mb_bottomNavigation]}>
        {data.isLoading ? <PreloaderView /> : null}
        <FlatList
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          numColumns={1}
          horizontal={false}
          bounces={true}
          data={isSearch ? filteredItems : data.items}
          ListEmptyComponent={<EmptyView message={data.lastFetched} />}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default PhotosComponent;
