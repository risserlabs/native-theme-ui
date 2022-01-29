/**
 * File: /components/Welcome/index.js
 * Project: -
 * File Created: 23-01-2022 02:18:40
 * Author: Clay Risser
 * -----
 * Last Modified: 29-01-2022 10:11:27
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2021 - 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center'
    },
    header: {
      fontSize: 18,
      marginBottom: 18
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18
    }
  };

  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>
          Welcome to React Native Storybook
        </Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          visual test case.
        </Text>
        <Text style={this.styles.content}>
          We have added some stories inside the "storybook/stories" directory
          for examples. Try editing the "storybook/stories/Welcome.js" file to
          edit this message.
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null
};

Welcome.propTypes = {
  showApp: PropTypes.func
};
