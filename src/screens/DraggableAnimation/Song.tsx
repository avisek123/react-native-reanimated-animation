/* eslint-disable jsdoc/require-jsdoc */
import {Dimensions, Image, Text, View} from 'react-native';
const SONG_HEIGHT = 70;

export function Song({
  artist,
  cover,
  title,
}: {
  artist: string;
  cover: string;
  title: string;
}) {
  const width = Dimensions.get('window').width;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: SONG_HEIGHT,
          backgroundColor: 'skyblue',
          marginTop: 10,
          borderRadius: 10,
        }}>
        <Image
          source={{uri: cover}}
          style={{height: 50, width: 50, borderRadius: 4}}
        />

        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              marginBottom: 4,
              color: '#000',
            }}>
            {title}
          </Text>

          <Text style={{fontSize: 12, color: '#fff'}}>{artist}</Text>
        </View>
      </View>
    </>
  );
}
