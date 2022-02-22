import React from "react";
import TextInput from "./TextInput";

class PersonalData extends React.Component {
    render(){
        return (
        <fildset>
            <TextInput length={40} label="Nome: " capitalLetter="characters" />
            <TextInput length={50} label="Email: " />
            <TextInput length={11} label="CPF: " />
            <TextInput length={200} label="Endereço: " />
            <TextInput length={28} label="Cidade: " />
        </fildset>
        )
    }
}

export default PersonalData;