import React, {Component} from 'react';
import Card from './Card.js';

class CardList extends Component {

    
    render(){
        return(
            <div className='card_list'>
                {this.props.buddyArray.map((buddy) => 
                <Card key={buddy} url={this.props.url + buddy}/>)}
            </div>
        );
    }
}

export default CardList;