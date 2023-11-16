###  설치
https://reactnavigation.org/docs/hello-react-navigation

https://www.nativewind.dev/

### npm i nativewind 
### npm i --dev tailwindcss@3.3.2 
### npx tailwindcss init

// tailwind.config.js

module.exports = {
  // <custom directory > -> src
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }


  3. Add the Babel plugin

  Modify your babel.config.js

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};



https://docs.expo.dev/versions/latest/sdk/lottie/
<!-- 로티 애니메이션 -->
npx expo install lottie-react-native


https://www.npmjs.com/package/react-native-responsive-screen
npm i react-native-responsive-screen

https://www.npmjs.com/package/react-native-reanimated
npm i react-native-reanimated@3.3.0


https://www.npmjs.com/package/react-native-heroicons