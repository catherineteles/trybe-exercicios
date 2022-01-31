const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
    let temperature = getMarsTemperature();
    let delay = messageDelay;
    setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), delay);
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo