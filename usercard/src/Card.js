import React, {Component} from 'react';
import fetchBuddyInfo from './services/fetchBuddyInfo.js';


class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            img: '',
            from: '',
            bio: '',
            gitUrl: ''
        }
    }

    componentDidMount(){
        fetchBuddyInfo(`${this.props.url}`)
             .then(res => {
                console.log(res.data)
                this.setState({
                    name: res.data.name,
                    img: res.data.avatar_url,
                    from: res.data.location,
                    bio: res.data.bio,
                    gitUrl: res.data.repos_url,
                })})
             .catch(err =>
                console.error('uh-oh, no data was fetched', err))
    }

    render(){
        return(
            <div className='card'>
                <img src={this.state.img} alt='not pictured' />
                <div className='card_info'>
                  <h3>Name: {this.state.name}</h3>
                  <p>from: {this.state.from}</p>
                  <p>bio: {this.state.bio}</p>
                  <a href={this.state.gitUrl}>Click here to check out my work!</a>
                </div>
            </div>
        );
    }
}

export default Card;