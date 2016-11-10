import React from 'react';
import { View, Platform } from 'react-native';

export default class ElevatedView extends React.Component {
  render() {
    let { elevation, style, ...otherProps } = this.props;
    let iosShadowElevation = {
      shadowColor: 'black',
    };

    switch (elevation) {
      case 1:
        iosShadowElevation = {
          shadowOpacity: 0.12,
          shadowRadius: 0.7,
          shadowOffset: {
            height: 0.7,
          },
        };
        break;
      case 2:
        iosShadowElevation = {
          shadowOpacity: 0.18,
          shadowRadius: 0.8,
          shadowOffset: {
            height: 1,
          },
        };
        break;
      case 3:
        iosShadowElevation = {
          shadowOpacity: 0.20,
          shadowRadius: 1.3,
          shadowOffset: {
            height: 1.9,
          },
        };
        break;
      case 4:
        iosShadowElevation = {
          shadowOpacity: 0.20,
          shadowRadius: 2.3,
          shadowOffset: {
            height: 2.5,
          },
        };
        break;
      case 5:
        iosShadowElevation = {
          shadowOpacity: 0.24,
          shadowRadius: 3,
          shadowOffset: {
            height: 3.5,
          },
        };
        break;
      default:
        break;
    }

    return Platform.select({
      ios: <View style={[iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>,
      android: <View elevation={elevation} style={style} {...otherProps}>
        {this.props.children}
      </View>,
    });
  }
}
