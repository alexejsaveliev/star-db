import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-details.css';

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
}

class ItemDetails extends Component {

    state = {
        item: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevPops) {
        if (this.props.itemId !== prevPops.itemId) {
            this.setState({ loading: true })
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (itemId) {
            getData(itemId)
                .then((item) => {
                    this.setState({
                        item,
                        loading: false,
                        image: getImageUrl(itemId)
                    })
                }).catch((err) => {
                    console.log(err);
                    this.setState({loading: false})
                });
        }
    }

    render() {

        const { loading, item, image } = this.state

        if (!this.props.itemId) {
            return <span>Select item</span>
        }

        const content = loading 
                            ? <Spinner /> 
                            : <ItemDetailsContent image={image} item={item} >{this.props.children}</ItemDetailsContent>

        return (
            <div className="person-details card">
                {content}
            </div>
        )
    }
}

const ItemDetailsContent = ({ item, image, children }) => {

    const { name } = item

    return (
        <React.Fragment>
            <img className="person-image"
                src={image} alt="person img" />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child)=>{
                        return React.cloneElement(child, {item});
                    }) }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ItemDetails