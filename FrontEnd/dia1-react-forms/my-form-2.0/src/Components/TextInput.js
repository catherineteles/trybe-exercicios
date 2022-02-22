import React from "react";

class TextInput extends React.Component {
    render(){
        const { length, label, capitalLetters } = this.props
        return  (
            <label htmlFor=""> {label}
                <input type="text" maxLength={length} autoCapitalize={capitalLetters} required></input>
            </label>)
    
    }
}

export default TextInput;