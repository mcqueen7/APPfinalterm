# APPmidterm
APP README
導覽
yarn add @react-navigation/native @react-navigation/native-stack

expo install react-native-screens react-native-safe-area-context

元件庫
yarn add native-base

expo install react-native-svg

TAB套件
yarn add @react-navigation/bottom-tabs

DRAWER套件
yarn add @react-navigation/drawer @babel/preset-typescript

expo install react-native-gesture-handler react-native-reanimated

SEGMENTED套件
yarn add react-native-segmented-control-tab

REDUX套件
yarn add redux react-redux redux-thunk


//////////////
除錯：react-devtools

去 node_modules/react-native-reanimated/src/reanimated2/core.ts
改成 if(global.performance==null){
	global.performce={
		now: global._chronoNow,	
	};
}
