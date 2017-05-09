import React from 'react';
import { View, Platform } from 'react-native';

export default class ElevatedView extends React.Component {
  static propTypes = {
    elevation: React.PropTypes.number,
  };
  static defaultProps = {
    elevation: 0
  };

  render() {
    const { elevation, style, ...otherProps } = this.props;

	//Return default View if elevation is 0
	if(elevation === 0){
		return (
			<View style={style} {...otherProps}>
          		{this.props.children}
        	</View>
		)
	}

    if (Platform.OS === 'android') {
      return (
        <View elevation={elevation} style={style} {...otherProps}>
          {this.props.children}
        </View>
      );
    }

	//Calculate iOS shadows
	const iosShadowElevation = {
		shadowOpacity: 0.002 * elevation + 0.15,
		shadowRadius: 0.64 * elevation - 0.16,
		shadowOffset: {
			height: 0.7 * elevation,
		},
		shadowColor: 'black',
	};

    return (
      <View style={[iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>
    );
  }
}
