/**
 * File: /components/Avatar/index.tsx
 * Project: -
 * File Created: 13-06-2022 00:51:44
 * Author: Clay Risser
 * -----
 * Last Modified: 13-06-2022 00:55:18
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

import React, { FC } from 'react';
import { SxProp, View as DView } from 'dripsy';
import { ViewProps as RNViewProps } from 'react-native';
import Text from '../Text';
import Image from '../Image';

export interface ViewProps extends RNViewProps {
  sx?: SxProp;
  isImage?: boolean;
  name?: string;
  uri?: string;
}

const Avatar: FC<ViewProps> = (props: ViewProps) => {
  const sx: SxProp = {
    ...styles.view,
    ...props.sx
  };
  return (
    <DView {...props} sx={{ ...sx }}>
      {props.isImage ? (
        <Image
          source={{
            uri: props.uri
          }}
          sx={styles.image}
        />
      ) : (
        <Text>{props.name}</Text>
      )}
    </DView>
  );
};

Avatar.defaultProps = {
  sx: {},
  isImage: false,
  name: '',
  uri: ''
};

export const styles = {
  view: {
    maxWidth: '100%',
    bg: 'primary',
    border: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'primary'
  }
};

export default Avatar;
