/* Automatically generated by './build/bin/build-entry.js' */

// 导入自定义组件
import Video from '../packages/component/video';
import Svg from '../packages/component/svg';
import Button from '../packages/component/button';
import Tabs from '../packages/component/tabs'
import TabPane from '../packages/component/tab-pane'

const components = [
  Svg,
  Video,
  Button,
  TabPane,
  Tabs,
];

const install = function (Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  Svg,
  Video,
  Button,
  Tabs,
  TabPane,
};