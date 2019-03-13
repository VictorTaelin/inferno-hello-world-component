const {Component} = require("inferno");
const {h} = require("inferno-hyperscript");

module.exports = class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {clicks: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("span",
      {onClick: () => this.setState({clicks: this.state.clicks + 1})},
      "Hello, world! Clicks: " + this.state.clicks);
  }
}
