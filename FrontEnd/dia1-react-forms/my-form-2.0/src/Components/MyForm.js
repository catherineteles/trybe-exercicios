import React from "react";
import PersonalData from "./PersonalData";

class MyForm extends React.Component {
    render(){
    return (
        <div>
            <h1>Meu Formulário 2.0</h1>
            <form>
                <PersonalData />
            </form>
        </div>
        )
    }
}

export default MyForm;