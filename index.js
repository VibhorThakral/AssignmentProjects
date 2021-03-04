/**
 * @format
 */

import {AppRegistry} from 'react-native';

import ProblemA from './src/components/ProblemA';
import ProblemB from './src/components/ProblemB';
import ProblemC from './src/components/ProblemC';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ProblemA);
