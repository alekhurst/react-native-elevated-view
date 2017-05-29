
## react-native-elevated-view

Tired of split pathing your elevation code? This is the package for you! `react-native-elevated-view` is a cross platform elevation component for iOS ___and___ Android. Since react native only officially supports the `elevation` prop for `<View>` components on Android, I've made `<ElevatedView>` to support iOS as well. Elevation docs from google can be found here: https://material.google.com/material-design/elevation-shadows.html#elevation-shadows-object-relationships.

## Configuration

1. `npm install react-native-elevated-view --save`
2. `import ElevatedView from 'react-native-elevated-view'`

## Demo
<a href="https://raw.githubusercontent.com/alekhurst/react-native-elevated-view/master/screenshot-ios.png"><img src="https://raw.githubusercontent.com/alekhurst/react-native-elevated-view/master/screenshot-ios.png" width="350"></a>
<a href="https://raw.githubusercontent.com/alekhurst/react-native-elevated-view/master/screenshot-android.png"><img src="https://raw.githubusercontent.com/alekhurst/react-native-elevated-view/master/screenshot-android.png" width="350"></a>

## Basic usage
```javascript
<ElevatedView  elevation={2} />
```

## Example

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ElevatedView from 'react-native-elevated-view'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ElevatedView
          elevation={3}
          style={styles.stayElevated}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e1e0'
  },

  stayElevated: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'white'
  }
});
```

## Props

- **`elevation`** _(Integer)_ - Must be between 0 and 24. The elevation you would like the elevated view to appear at.

## Contribution
**Issues** and **Pull requests** are welcome!

---
