/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import Button from '../components/Button';
import {colors, fonts} from '../utils/theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Container>
      <StatusBar />
      <InputContainer>
        <Input>0</Input>
      </InputContainer>
      <ButtonContainer>
        <ButtonRow>
          <Button backgroundColor={colors.secondary}>AC</Button>
          <Button backgroundColor={colors.secondary}>+/-</Button>
          <Button backgroundColor={colors.secondary}>%</Button>
          <Button backgroundColor={colors.accent}>/</Button>
        </ButtonRow>
        <ButtonRow>
          <Button backgroundColor={colors.primary}>7</Button>
          <Button backgroundColor={colors.primary}>8</Button>
          <Button backgroundColor={colors.primary}>9</Button>
          <Button backgroundColor={colors.accent}>x</Button>
        </ButtonRow>
        <ButtonRow>
          <Button backgroundColor={colors.primary}>1</Button>
          <Button backgroundColor={colors.primary}>2</Button>
          <Button backgroundColor={colors.primary}>3</Button>
          <Button backgroundColor={colors.accent}>+</Button>
        </ButtonRow>
        <ButtonRow>
          <Button backgroundColor={colors.primary}>4</Button>
          <Button backgroundColor={colors.primary}>5</Button>
          <Button backgroundColor={colors.primary}>6</Button>
          <Button backgroundColor={colors.accent}>-</Button>
        </ButtonRow>
        <ButtonRow>
          <Button backgroundColor={colors.primary}>1</Button>
          <Button backgroundColor={colors.primary}>2</Button>
          <Button backgroundColor={colors.primary}>3</Button>
          <Button backgroundColor={colors.accent}>+</Button>
        </ButtonRow>
        <ButtonRow>
          <Button backgroundColor={colors.primary} size="large">
            0
          </Button>
          <Button backgroundColor={colors.primary}>.</Button>
          <Button backgroundColor={colors.accent}>=</Button>
        </ButtonRow>
      </ButtonContainer>
    </Container>
  );
};

export default App;

const Container = styled.SafeAreaView`
  width: ${wp('100%')};
  height: ${hp('100%')};
  background-color: ${colors.primary};
`;

const InputContainer = styled.View`
  width: ${wp('100%')};
  height: ${hp('35%')};
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Input = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${wp('17.1%')};
`;

const ButtonContainer = styled.View`
  width: ${wp('100%')};
  height: ${hp('65%')};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 1;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;
