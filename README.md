# **🎨 React Native Reanimated Animation Repository**

## **🚀 Overview**

This repository is a collection of custom animations using **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)**. It provides optimized, reusable logic for animations, gesture-based transitions, and smooth UI experiences tailored for React Native applications.

---

## **✨ Features**

- 🌀 **Smooth Native Animations**: Offloads animations to the native thread for flawless performance.
- 🖱️ **Gesture-Based Animations**: Integrates well with gestures using `react-native-gesture-handler`.
- 📱 **Performance Optimized**: Avoids frame drops for complex animations.
- 🛠️ **Custom Easing Functions**: Includes advanced easing curves like `Easing.bezier`.

---

## **📦 Installation**

1. Add the `react-native-reanimated` library to your project:

   ```bash
   yarn add react-native-reanimated react-native-gesture-handler

   ```

## **🛠 Technologies Used**

- **React Native**: A framework for building native applications using React.
- **React Native Reanimated v3+**: A library for creating smooth animations and transitions in React Native.
- **React Native Gesture Handler**: A library that provides better gesture handling capabilities than the default React Native gesture system.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, enhancing code quality and maintainability.
- **Yarn**: A package manager that helps manage project dependencies efficiently.

## **🔧 Installation**

Follow these steps to get started with this repository:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-native-reanimated-animation.git
   cd react-native-reanimated-animation

   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Enable Reanimated in babel.config.js:**
   ```bash
   module.exports = {
   presets: ['module:metro-react-native-babel-preset'],
   plugins: ['react-native-reanimated/plugin'],
   };
   ```

## **📋 Best Practices**

- **Use Shared Values:** Store and manipulate animation values using `useSharedValue`.
- **Performance Optimization:** Offload heavy animations using native threads through Reanimated.
- **Test Animations Separately:** Use `renderHook` and `act` for testing hooks like animations.
- **Modular Animations:** Organize animation logic into hooks or utility files to enhance reusability.

## **🤝 Contributing**

Contributions are welcome! If you have any ideas or improvements, feel free to open a pull request or submit an issue.

Please ensure your code follows the existing style and passes all tests.

Thanks! ❤️
<br/>
[avisek123.github.io](https://github.com/avisek123)
<br/>
Avisek

![WhatsApp Image 2024-09-19 at 7 49 24 PM](https://github.com/user-attachments/assets/d5af07bd-46b7-40b7-a945-4b06e6c90288)
