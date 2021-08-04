
import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Alert,
} from 'react-native'
import * as S from './styles'
import { showAlert } from '../../utils/home/alert'


const Home: React.FC = () => {
    
    const [weight, setWeight] = useState<any>(0);
    const [height, setHeight] = useState<any>(0);
    const [imc, setImc] = useState(0);

    const calculateImc = () => setImc(weight / (height * height))


    useEffect(() => {
        if (imc > 0) {
            showAlert(imc)
            setWeight(0)
            setHeight(0)
            setImc(0)
        }
    }, [imc])

    return (
        <S.Container>
            <S.TitleText>IMC Calculator</S.TitleText>
            <S.ParagraphText>Necessário usar ponto para as casas decimais</S.ParagraphText>
            <View>
                <S.FormInput keyboardType="numeric" placeholder="altura" onChangeText={height => setHeight(height)} value={height} />
                <S.FormInput keyboardType="numeric" placeholder="peso" onChangeText={weight => setWeight(weight)} value={weight} />
            </View>
            <S.ButtonContainer onPress={calculateImc}>
                <S.ButtonText>Calcular</S.ButtonText>
            </S.ButtonContainer>
        </S.Container>
    );
};



export default Home;