import React from 'react';
import { View, Platform } from 'react-native';

export default class ElevatedView extends React.Component {
  render() {
    const { elevation, style, ...otherProps } = this.props;
    
    if(Platform.OS === 'android'){
      return (<View elevation={elevation} style={style} {...otherProps}>
	      {this.props.children}
      </View>);
    }

    let iosShadowElevation = {};

    switch (elevation) {
      case 1:
        iosShadowElevation = {
          shadowOpacity: 0.12,
          shadowRadius: 0.8,
          shadowOffset: {
            height: 0.8,
          },
        };
        break;
      case 2:
        iosShadowElevation = {
          shadowOpacity: 0.18,
          shadowRadius: 0.9,
          shadowOffset: {
            height: 1,
          },
        };
        break;
      case 3:
        iosShadowElevation = {
          shadowOpacity: 0.18,
          shadowRadius: 1.4,
          shadowOffset: {
            height: 2,
          },
        };
        break;
      case 4:
        iosShadowElevation = {
          shadowOpacity: 0.18,
          shadowRadius: 2.5,
          shadowOffset: {
            height: 2.8,
          },
        };
        break;
      case 5:
        iosShadowElevation = {
          shadowOpacity: 0.24,
          shadowRadius: 3.2,
          shadowOffset: {
            height: 4,
          },
        };
        break;
      default:
        break;
    }

    iosShadowElevation.shadowColor = 'black';

    return (<View style={[iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>);
  }
}
