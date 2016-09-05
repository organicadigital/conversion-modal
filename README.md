# Conversion Modal

This project aims to create a very easy way to open modals based on some events.

The inspiration for this project is creating modal windows that increase conversion rates.

## Installation

This lib requires some dependencies:

* [jQuery](http://jquery.com/download/);
* [Ouibounce](https://github.com/carlsednaoui/ouibounce): For exit intent popups.

TODO

## Usage

Here you can see usage types. Go on, pick one!

## Exit Intent

This type is fired when the user is leaving the page. We're using the awesome lib [Ouibounce](https://github.com/carlsednaoui/ouibounce) that abstracts the hard work.

![Image of Exit Intent Modal](http://g.recordit.co/BNqTRgAiJk.gif)

* [Example Here](examples/exit-intent.html)

The magick is here:

```javascript
  conversionModal("<h2>Please, dont go!</h2><p>I've got something to tell you...</p>", {
    type: 'exit_intent',
    background: 'orange',
    accept_text: 'Really? Tell me more...',
    accept_link: 'http://www.organicadigital.com',
    accept_link_target: '_blank',
    reject_text: 'I dont care.',
    // You can use any Ouibounce arg here
    aggressive: true // Don't use this in production... It will show this modal EVERY time user tries to close the window.
  });
```


## Options

TODO Table with all options

## Thanks

Made with <3 and a lot of coffee at [Orgânica Digital Innovation](http://www.organicadigital.com).