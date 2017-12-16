# ko-loader

## Installation

`yarn add ko-loader`

## How to use

You need to use the debug version of knockout, so that this loader can find the places where the global jquery is used, and replace it for the webpack use.

```javascript
module: {
    rules: [
      { 
      	test: /knockout-latest\.debug\.js$/, 
      	loader: 'ko-loader'
      }
    ]
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
