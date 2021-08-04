import { Alert } from 'react-native'

export const showAlert = (imc: number) => {
  let text;
  
  if(imc < 18.5) {
    text = "Você está abaixo do peso :("
  } else if (imc < 29.9) {
    text = "Você está com o peso ideal! :D"
  } else {
    text = "Você está acima do peso :("
  }

  Alert.alert(
    `Seu IMC é ${imc.toFixed(2)}`,
    `${text}`,
    [
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  )
}