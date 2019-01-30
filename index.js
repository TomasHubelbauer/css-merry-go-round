window.addEventListener('load', _ => {
  const tag = (type, propsAndOrChildren) => {
    if (propsAndOrChildren.length === 0) {
      return React.createElement(type);
    }

    // Accepts object as props as long as it is an object which is not a React element instance ($$typeof === Symbol) or an array
    if (typeof propsAndOrChildren[0] === 'object' && !(propsAndOrChildren[0] instanceof Array) && !propsAndOrChildren[0].$$typeof) {
      return React.createElement(type, propsAndOrChildren[0], ...propsAndOrChildren.slice(1));
    }

    return React.createElement(type, undefined, ...propsAndOrChildren);
  }

  const a = (...propsAndOrChildren) => tag('a', propsAndOrChildren);
  const audio = (props) => React.createElement('audio', props);
  const div = (...propsAndOrChildren) => tag('div', propsAndOrChildren);
  const input = (props) => React.createElement('input', props);
  const label = (...propsAndOrChildren) => tag('label', propsAndOrChildren);
  const p = (...propsAndOrChildren) => tag('p', propsAndOrChildren);
  const progress = (props) => React.createElement('progress', props);

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [
          {
            position: 17.589342,
            duration: 1.400227000000001,
            text: 'still'
          },
          {
            position: 19.569047,
            duration: 1.3200450000000004,
            text: 'and silent'
          },
          {
            position: 22.020022,
            duration: 3.1191379999999995,
            text: 'calm before the storm'
          },
          {
            position: 26.339183,
            duration: 1.2400680000000008,
            text: 'gold'
          },
          {
            position: 28.21941,
            duration: 1.6700230000000005,
            text: 'and diamond'
          },
          {
            position: 30.689297,
            duration: 3.159682,
            text: 'jewels behind the throne'
          },
          {
            position: 34.189024,
            duration: 1.4399549999999977,
            text: 'into the night'
          },
          {
            position: 35.989365,
            duration: 1.7395459999999972,
            text: 'out of the dark'
          },
          {
            position: 38.309455,
            duration: 1.5899100000000033,
            text: 'take to the sky'
          },
          {
            position: 40.499047,
            duration: 1.729887000000005,
            text: 'chasing the stars'
          },
          {
            position: 43.029319,
            duration: 1.2997510000000005,
            text: 'all that we said'
          },
          {
            position: 44.83916,
            duration: 1.869638000000002,
            text: 'all that we are'
          },
          {
            position: 47.20882,
            duration: 1.6350119999999961,
            text: 'waiting to fly'
          },
          {
            position: 49.229274,
            duration: 1.489955000000002,
            text: 'this is the start'
          },
          {
            position: 53.889115,
            duration: 1.080204000000002,
            text: 'hide and seek'
          },
          {
            position: 55.708979,
            duration: 1.735284,
            text: 'reason and rhym'
          },
          {
            position: 58.239092,
            duration: 2.9601589999999973,
            text: 'grand and glorious'
          },
          {
            position: 62.359365,
            duration: 1.8348299999999966,
            text: 'living the dream'
          },
          {
            position: 64.999206,
            duration: 1.4797049999999956,
            text: 'yours and mine'
          },
          {
            position: 67.119251,
            duration: 2.7600229999999897,
            text: 'euphoria'
          },
          {
            position: 70.199319,
            duration: 2.489931999999996,
            text: 'hide and seek'
          },
          {
            position: 73.059251,
            duration: 1.8598640000000017,
            text: 'reason and rhyme'
          },
          {
            position: 75.324104,
            duration: 3.265079,
            text: 'grand and glorious'
          },
          {
            position: 79.789024,
            duration: 1.6403410000000065,
            text: 'living the dream'
          },
          {
            position: 82.07907,
            duration: 2.1901809999999955,
            text: 'yours and mine'
          },
          {
            position: 84.80941,
            duration: 2.749887000000001,
            text: 'euphoria'
          },
          {
            position: 115.879115,
            duration: 0.8800679999999943,
            text: 'stone'
          },
          {
            position: 117.93916,
            duration: 1.6497059999999948,
            text: 'and feather'
          },
          {
            position: 120.179433,
            duration: 2.9095009999999917,
            text: 'move outside your head'
          },
          {
            position: 124.529115,
            duration: 1.1298639999999978,
            text: 'now'
          },
          {
            position: 126.459183,
            duration: 1.369909000000007,
            text: 'or never'
          },
          {
            position: 128.919024,
            duration: 2.8849889999999903,
            text: 'strong in every step'
          },
          {
            position: 132.409478,
            duration: 1.3494560000000035,
            text: 'give me a sign'
          },
          {
            position: 134.309387,
            duration: 1.57483000000002,
            text: 'hitting the mark'
          },
          {
            position: 136.539455,
            duration: 1.6595920000000035,
            text: 'take to the sky'
          },
          {
            position: 138.72882,
            duration: 1.5904309999999953,
            text: 'chasing the stars'
          },
          {
            position: 140.919251,
            duration: 1.7500459999999975,
            text: 'open your eyes'
          },
          {
            position: 143.109206,
            duration: 1.6402040000000113,
            text: 'watching afar'
          },
          {
            position: 145.334263,
            duration: 1.6997949999999946,
            text: 'waiting to fly'
          },
          {
            position: 147.499206,
            duration: 1.5450110000000166,
            text: 'this is the start'
          },
          {
            position: 151.818934,
            duration: 1.6903169999999932,
            text: 'hide and seek'
          },
          {
            position: 154.00916,
            duration: 1.9800459999999873,
            text: 'reason and rhyme'
          },
          {
            position: 156.359274,
            duration: 3.059728000000007,
            text: 'grand and glorious'
          },
          {
            position: 160.559251,
            duration: 1.6800230000000056,
            text: 'living the dream'
          },
          {
            position: 162.70873,
            duration: 2.300249000000008,
            text: 'yours and mine'
          },
          {
            position: 165.393424,
            duration: 2.970497999999992,
            text: 'euphoria'
          },
          {
            position: 196.269319,
            duration: 0.8594109999999944,
            text: 'hide and seek'
          },
          {
            position: 197.659115,
            duration: 1.7998639999999853,
            text: 'reason and rhyme'
          },
          {
            position: 199.96907,
            duration: 3.0898640000000057,
            text: 'grand and glorious'
          },
          {
            position: 204.189138,
            duration: 1.789681999999999,
            text: 'living the dream'
          },
          {
            position: 206.309274,
            duration: 1.8500680000000216,
            text: 'yours and mine'
          },
          {
            position: 209.149002,
            duration: 2.720089999999999,
            text: 'euphoria'
          }
        ],
        position: 0,
        activationPercentage: 100,
        scale: 100,
        showAxis: false,
      };

      this.onAudioTimeUpdate = event => {
        this.setState({ position: event.currentTarget.currentTime });
      };

      this.audioRef = node => this.audioNode = node;

      this.onPositionInputChange = event => {
        this.setState({ position: event.currentTarget.valueAsNumber });
      };

      this.onShowAxisInputChange = event => {
        this.setState({ showAxis: event.currentTarget.checked });
      };

      this.onActivationPercentageInputChange = event => {
        this.setState({ activationPercentage: event.currentTarget.valueAsNumber });
      };
    }

    render() {
      return div(
        this.audioNode && div(
          { id: 'merry-go-round', className: this.state.showAxis ? 'with-axis' : '' },
          this.state.items.map((item, index) => div(
            { key: index, style: { left: `calc(50% - ${this.state.position * this.state.scale}px)`, transform: `translate(calc(${this.state.activationPercentage}% + ${item.position * this.state.scale}px), ${index % 5}em)` } },
            item.text,
            progress({ max: item.duration, value: this.state.position - item.position > item.duration ? 0 : this.state.position - item.position }),
          )),
        ),
        audio({ controls: true, autoPlay: true, src: './thefatrat-the-calling-feat-laura-brehm.mp3', onTimeUpdate: this.onAudioTimeUpdate, ref: this.audioRef }),
        p(
          'Music: ',
          a({ href: 'https://the-arcadium.net/tracks/the-calling/', target: '_blank', }, 'TheFatRat - The Calling feat. Laura Brehm'),
          ' ',
          a({ href: 'https://open.spotify.com/track/2k1bFfcPIRTMeCGO48F0OE', target: '_blank', }, 'https://open.spotify.com/track/2k1bFfcPIRTMeCGO48F0OE'),

        ),
        div(
          input({ type: 'checkbox', id: 'showAxisInput', checked: this.state.showAxis, onChange: this.onShowAxisInputChange }),
          label({ htmlFor: 'showAxisInput' }, 'Show axis'),
        ),
        div(
          label({ htmlFor: 'activationPercentageInput' }, 'Activation percentage: '),
          input({ type: 'range', value: this.state.activationPercentage, onChange: this.onActivationPercentageInputChange }),
          this.state.activationPercentage + ' %',
        ),
        p(
          'Made by ',
          a({ href: 'https://github.com/TomasHubelbauer', target: '_blank', }, 'Tomas Hubelbauer'),
          ' · ',
          a({ href: 'https://github.com/TomasHubelbauer/css-merry-go-round', target: '_blank', }, 'GitHub'),
        ),
      );
    }

    componentDidMount() {
      const raf = () => {
        this.setState({ position: this.audioNode.currentTime });
        window.requestAnimationFrame(raf);
      };

      window.requestAnimationFrame(raf);
    }
  }

  ReactDOM.render(React.createElement(App), document.querySelector('#app'));
});
