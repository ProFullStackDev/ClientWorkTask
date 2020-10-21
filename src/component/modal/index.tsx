import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');
const screenHeight: number = height;
const screenWidth: number = width;
export interface Props {
  modalVisible: boolean,
  modalType: number,
  setModalVisible: any,
  performAction: any,
  nextModalVisible: boolean,
}

const ModalView: React.FC<Props> = (props: Props) => {
  const ModalViewBody = () => {
    if (props.modalType === 1 && !props.nextModalVisible) {
      return (
        <View style={styles.modalView}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '400',
                color: '#3E3E3E',
                lineHeight: 38,
                letterSpacing: 1,
                textAlign: 'center',
              }}
            >
              Lorem{'\n'}
              ipsum lorem {' '}
            </Text>
          </View>
          <View>
            <Text
              style={{
                opacity: 0.6,
                lineHeight: 24,
                color: '#3E3E3E',
                fontWeight: '400',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#292929',
                borderRadius: 8,
                paddingVertical: 16,
                paddingHorizontal: 50,
              }}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
                props.performAction();
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '300',
                  fontFamily: 'Roboto',
                }}
              >
                Ok{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (props.modalType === 2 && !props.nextModalVisible) {
      return (
        <View style={styles.modalView}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '400',
                color: '#3E3E3E',
                lineHeight: 38,
                letterSpacing: 1,
                textAlign: 'center',
              }}
            >
              Lorem{'\n'}
              ipsum lorem {' '}
            </Text>
          </View>
          <View>
            <Text
              style={{
                opacity: 0.6,
                lineHeight: 24,
                color: '#3E3E3E',
                fontWeight: '400',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{' '}
            </Text>
          </View>
          <View>
            <View style={styles.ModalTwoBtnsView}>
              <TouchableOpacity
                style={{
                  borderColor: '#292929',
                  borderRadius: 8,
                  paddingVertical: 16,
                  paddingHorizontal: 20,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                  props.performAction();
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    lineHeight: 14.06,
                  }}
                >
                  Annulla
                </Text>
              </TouchableOpacity>
              <View style={{ width: 30 }} />
              <TouchableOpacity
                style={{
                  backgroundColor: '#292929',
                  borderRadius: 8,
                  paddingVertical: 16,
                  paddingHorizontal: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                  props.performAction();
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    lineHeight: 14.06,
                  }}
                >
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (props.nextModalVisible) {
      return (
        <View style={styles.modalViewPopUp}>
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: '400',
                color: 'white',
                lineHeight: 38,
                letterSpacing: 1,
                textAlign: 'center',
              }}
            >
              Lorem
            </Text>
          </View>

          <View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  paddingVertical: 16,
                  width: screenWidth / 1.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                  props.performAction();
                }}
              >
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',
                    lineHeight: 14.06,
                  }}
                >
                  Lorem Ipsum
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      // onRequestClose={() => {
      //   props.setModalVisible(!props.modalVisible);
      // }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: props.nextModalVisible
            ? 'rgba(0,0,0,0)'
            : 'rgba(0,0,0,0.2)',
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            !props.nextModalVisible &&
              props.setModalVisible(!props.modalVisible);
          }}
        />
        {ModalViewBody()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalTwoBtnsView: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  modalView: {
    position: 'absolute',
    width: '86%',
    backgroundColor: 'white',
    alignItems: 'center',
    bottom: screenHeight / 3.3,
    borderColor: '#ededed',
    borderWidth: 0.4,
    height: '40%',
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'space-evenly',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#999999',
  },
  modalViewPopUp: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#2D312F',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'space-evenly',
    height: '28%',
  },
});

export default ModalView;
