import React from 'react';
export class Header extends React.Component{
    search(event){
        this.props.onKeyUp(event.target.value);
    }

    render(){
    return (
        <header>
            <h1 style={{ textAlign: 'center' }}>
                Busca de Posts
            </h1>
            <input type="text"
                   className="search"
                    placeholder="Digite o que você procura"
                   onKeyUp={(event) => this.search(event)}
            />
        </header>
        );
    }
}