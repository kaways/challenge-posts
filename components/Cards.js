import React from 'react';
export class Cards extends React.Component{
    render() {
        return (
            <div>
                {this.props.items.map(function (item) {
                    return  <div className="card" key={item}>
                            <div className="picture-area">
                                <img src={item.image} className="image" alt=""/>
                            </div>
                            <div className="info">
                                <h2> {item.title} </h2>
                                <p> {item.text} </p>
                                <p> Autor: <b>{item.autor}</b></p>
                                <p> Empresa: <b>{item.company}</b></p>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}