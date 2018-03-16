# React Tips
react-tip is a lightweight tips components built for React

## Features
- Lightweight
- Fully Customizable (~~styles~~, interval)

## Versions
- This documentation is for version 1 of react-tips.

## Installation
1. Install React Tips as a dependency
    ```bash 
    # Yarn
    $ yarn add react-tips

    # NPM
    $ npm install react-tips
    ```
    
2. Import the 'react-tips' module
    ```javascript
    // ES6
    import ReactTips from 'react-tips'
    // ES5
    var ReactTips = require('react-tips')
    ```

## Usage
```javascript
import ReactTips from 'react-tips'

...

render() {
    const tips = [
        "Tip: You can input as many tips as possible",
        "Tip: You can also set the interval in milliseconds"
    ]
    
    return (
        <ReactTips tips={tips} interval={10000} />
    )
}
```

## Props
These are all of the available props (and their default values) for the component.

```javascript
{
    tips: [], // The array of string to be rendered
    interval: 10000 // The interval to change to another tip
}
```

## Contributing
- Fork this repo [https://github.com/benjie91/react-tips]
- Install dependencies with $ yarn
- Auto-build files as you edit with $ yarn start in root directory
- Implement your changes to file in the src/ directory
- See the changes live by going to running $ yarn start in example directory
- Submit Merge Request for review