import { View, Text, TouchableOpacity } from 'react-native'
import Title from '../../components/Title'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home" />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Title title="Go to Profile" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Category')}>
        <Title title="Go to Category" />
      </TouchableOpacity>
    </View>
  )
}

export default Home