(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{423:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(1),a=t(9),o=(t(0),t(467)),c={id:"screen-tracking",title:"Screen tracking",sidebar_label:"Screen tracking"},i={id:"version-1.x/screen-tracking",title:"Screen tracking",description:"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK. ",source:"@site/versioned_docs/version-1.x/screen-tracking.md",permalink:"/docs/1.x/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/screen-tracking.md",version:"1.x",sidebar_label:"Screen tracking",sidebar:"version-1.x/docs",previous:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"},next:{title:"Redux integration",permalink:"/docs/1.x/redux-integration"}},s=[{value:"Screen tracking with Redux",id:"screen-tracking-with-redux",children:[]},{value:"Create Redux store and apply the above middleware",id:"create-redux-store-and-apply-the-above-middleware",children:[]}],u={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This example shows how to do screen tracking and send to Google Analytics. The approach can be adapted to any other analytics SDK. "),Object(o.b)("p",null,"When using built-in navigation container, we can use ",Object(o.b)("inlineCode",{parentName:"p"},"onNavigationStateChange")," to track the screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\n// gets the current screen from navigation state\nfunction getCurrentRouteName(navigationState) {\n  if (!navigationState) {\n    return null;\n  }\n  const route = navigationState.routes[navigationState.index];\n  // dive into nested navigators\n  if (route.routes) {\n    return getCurrentRouteName(route);\n  }\n  return route.routeName;\n}\n\nconst AppNavigator = StackNavigator(AppRouteConfigs);\n\nexport default () => (\n  <AppNavigator\n    onNavigationStateChange={(prevState, currentState) => {\n      const currentScreen = getCurrentRouteName(currentState);\n      const prevScreen = getCurrentRouteName(prevState);\n\n      if (prevScreen !== currentScreen) {\n        // the line below uses the Google Analytics tracker\n        // change the tracker here to use other Mobile analytics SDK.\n        tracker.trackScreenView(currentScreen);\n      }\n    }}\n  />\n);\n")),Object(o.b)("h3",{id:"screen-tracking-with-redux"},"Screen tracking with Redux"),Object(o.b)("p",null,"When using Redux, we can write a Redux middleware to track the screen. For this purpose,\nwe will reuse ",Object(o.b)("inlineCode",{parentName:"p"},"getCurrentRouteName")," from the previous section."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\nimport { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';\n\nconst tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);\n\nconst screenTracking = ({ getState }) => next => (action) => {\n  if (\n    action.type !== NavigationActions.NAVIGATE\n    && action.type !== NavigationActions.BACK\n  ) {\n    return next(action);\n  }\n\n  const currentScreen = getCurrentRouteName(getState().navigation);\n  const result = next(action);\n  const nextScreen = getCurrentRouteName(getState().navigation);\n  if (nextScreen !== currentScreen) {\n    // the line below uses the Google Analytics tracker\n    // change the tracker here to use other Mobile analytics SDK.\n    tracker.trackScreenView(nextScreen);\n  }\n  return result;\n};\n\nexport default screenTracking;\n")),Object(o.b)("h3",{id:"create-redux-store-and-apply-the-above-middleware"},"Create Redux store and apply the above middleware"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"screenTracking")," middleware can be applied to the store during its creation. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"Redux-Integration.md"}),"Redux Integration")," for details."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const store = createStore(\n  combineReducers({\n    navigation: navigationReducer,\n    ...\n  }),\n  applyMiddleware(\n    screenTracking,\n    ...\n    ),\n);\n")))}l.isMDXComponent=!0},467:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=r,b=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return t?a.a.createElement(b,i({ref:n},u,{components:t})):a.a.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);