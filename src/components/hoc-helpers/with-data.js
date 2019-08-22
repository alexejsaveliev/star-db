import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withData = (View) => {

    return class extends Component {

        state = {
            data: null,
            loading: true,
            hasError: false
        }

        onItemsReceived = (data) => {
            this.setState({
                data,
                loading: false
            });
        }

        componentDidMount() {

            this.props.getData()
                .then(this.onItemsReceived)
                .catch((err) => {
                    this.setState({ loading: false, hasError: true })
                });
        }

        render() {

            const { data, loading, hasError } = this.state;

            if (loading) {
                return <Spinner />
            }

            if (hasError) {
                return <ErrorIndicator />
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData