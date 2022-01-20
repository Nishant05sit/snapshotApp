import React from 'react';
class Image extends React.Component {
    render() {
        return (
            <img src={this.props.src} alt="No images to load"/>
        )
    }
}

export default Image;