import styled from 'styled-components/native'


export const Container = styled.View`
   flex: 1;
   flex-direction: column;
   background-color: white;
   align-items: center;
   justify-content: center;
  `;

export const FormInput = styled.TextInput`
    margin-top: 20px;
    width: 300px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #CDDDDD;
  
  `;

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 40px;
    margin-bottom: 40px;
    width: 120px;
    height: 40px;
    padding: 10px;
    border-radius: 10px;
    background-color: #c42f8b;
  `;

export const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: white;
  `;

export const TitleText = styled.Text`
    font-size: 25px;
    margin-bottom: 20px;
  
  `;

export const ParagraphText = styled.Text`
    color: grey;
    font-size: 12px;
  `;