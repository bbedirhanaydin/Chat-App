import {StyleSheet, Dimensions} from 'react-native';

const baseStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1.1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: 8,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  containerView: {
    flexDirection: 'row',
  },
});

const styles = {
  primary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: '#CC7351',
    },
  }),

  secondary: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#CC7351',
    },
  }),
};

export default styles;
