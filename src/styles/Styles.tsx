import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#00C9CC',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerWhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //flexShrink: 0,
    flexDirection: 'column',
  },
  footerContainer: {
    flexDirection: 'row',
    //alignItems: 'baseline',
    borderTopWidth: 2,
    borderTopColor: '#00C9CC',
    height: 80,
    width: '100%',
    flexShrink: 0,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    //paddingVertical: 'auto',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  imgLogo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  iconLogo: {
    width: 50,
    height: 50,
    flexShrink: 0,
    alignItems: 'center',
    borderRadius: 100,
  },
  iconLogout: {
    width: 30,
    height: 30,
  },
  searchContainer: {
    marginBottom: 10,
  },
  txtTitle: {
    color: "#fff",
    fontFamily: "IrishGrover",
    fontSize: 40,
    alignItems: 'center',
  },
  txtSubTitle: {
    color: "#000000",
    fontFamily: "IrishGrover",
    fontSize: 30,
    alignItems: 'center',
  },
  txtHeader: {
    color: "#fff",
    fontFamily: "IrishGrover",
    fontSize: 20,
    alignItems: 'center',
  },
  underlineTextStyle: {
    fontSize: 16,
    color: '#0f3e8d',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    lineHeight: 50, // Altura da linha igual à altura da caixa
    marginLeft: 5,
  },
  txtNormal: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000', // Cor do texto preta
    //lineHeight: 50, // Altura da linha igual à altura da caixa
    marginLeft: 5,
  },
  txtBold: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold', // Negrito
    marginLeft: 5,
    //lineHeight: 50, // Altura da linha igual à altura da caixa

  },
  input: {
    width: '90%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginVertical: 10,
    padding: 10,
    alignItems: 'stretch',
  },
  separator: {
    width: '100%',
    height: 2,
    marginVertical: 5,
    borderBottomColor: '#000',
    backgroundColor: '#00C9CC',
  },
  header: {
    width: '100%',
    height: 60,
    flexShrink: 0,
    backgroundColor: '#00C9CC',
    //top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 'auto',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00C9CC',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonCancelar: {
    width: 150,
    height: 50,
    backgroundColor: '#ff0000',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonDate: {
    width: 140,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  dateText: {
    color: 'black',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    gap: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  cardServices: {
    //flex: 1,
    width: '100%',
    height: 80, // Altura de 50 pixels
    borderRadius: 10, // Bordas arredondadas com raio de 10 pixels
    flexShrink: 0,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  txtCardServices: {
    flexDirection: 'column',
    marginBottom: 6,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  txtCardServicesN: {
    flexDirection: 'column',
    marginBottom: 6,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'normal',
    alignItems: 'center',
  },
  iconServices: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  alert: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  signMessageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  margin: {
    width: '100%',
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  LocationArea: {
    backgroundColor: '#4EADBE',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
  },
});