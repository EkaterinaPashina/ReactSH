import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    render() {
        const {url, name, universe, alterego, occupation, friends, superpowers} = this.props;
        return (
                <div className="card">
                    <div className="hero__img">
                        <img src={url} alt={name}/>
                    </div>
                    <img src={url} alt={name}/>
                    <h2 className="hero__name">{name}</h2>
                    <p className="hero__universe"><span class="header">Вселенная: </span>{universe}</p>
                    <p className="hero__alterego"><span class="header">Альтег эго: </span>{alterego}</p>
                    <p className="hero__ocupation"><span class="header">Род деятельности: </span>{occupation}</p>
                    <p className="hero__friends"><span class="header">Друзья: </span>{friends}</p>
                    <p className="hero__superpowers"><span class="header">Суперсилы: </span>{superpowers}</p>
                </div>
        )
    }
}

export default Hero;