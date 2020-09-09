import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import BookCarousel from './BookCarousel';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {getUser} from '../../redux/auth/actions';
const Index = () => {
  const route = useRoute();
  const {book} = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    // Kitabı satan user bilgileri çekilecek
    //dispatch(getUser(book.sellerId));
  }, [dispatch]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.imgContainer}>
        <BookCarousel data={book.img} />
      </View>
      <View style={styles.pageHeader}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{book.bookName}</Text>
          <Text style={styles.priceText}>
            {book.bookPrice}
            <Text style={{color: 'black'}}> ₺</Text>
          </Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.author}>{book.author}</Text>
          <Text style={styles.sellerText}>Satıcı: {book.seller}</Text>
        </View>
      </View>
      <ScrollView persistentScrollbar scrollEnabled style={styles.pageContent}>
        <Text>{book.bookText}</Text>
      </ScrollView>
      <View style={styles.pageFooter}>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              Alert.alert('Eklendi', `${book.bookName} listenize eklendi.`)
            }
            text="Satıcıya yaz"
          />
        </View>
      </View>
    </View>
  );
};

export default Index;
