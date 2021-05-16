import React, {ReactNode} from 'react';
import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../utils/theme';

interface Props {
  children: ReactNode;
  backgroundColor: colors;
  size?: 'small' | 'large';
}

export default function Button(props: Props) {
  return (
    <Container backgroundColor={props.backgroundColor} size={props.size}>
      <Numb>{props.children}</Numb>
    </Container>
  );
}
// prettier-ignore
const Container = styled.TouchableOpacity<Pick<Props, 'backgroundColor' | 'size'>>`
  width: ${props => (props.size === 'large' ? wp('37.33%') : wp('18.67%'))};
  height: ${hp('8.62%')}px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.3);
  box-shadow: 12px 12px 16px rgba(0, 0, 0, 0.8);
  /* box-shadow: 3px 3px 8px rgba(179, 167, 4, 0.9);
  box-shadow: -3px -3px 6px rgba(255, 255, 6, 0.9);
  box-shadow: 3px -3px 6px rgba(179, 167, 4, 0.2);
  box-shadow: -3px 3px 6px rgba(179, 167, 4, 0.2);
  box-shadow: -1px -1px 2px rgba(179, 167, 4, 0.5);
  box-shadow: inset 1px 1px 2px rgba(255, 255, 6, 0.3); */
`;

const Numb = styled.Text`
  font-family: ${fonts.robotoBold};
  font-size: ${hp('2.95%')};
  line-height: ${hp('3.45%')};
`;
