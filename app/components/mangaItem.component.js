React = require('react');

function MangaItem() {
  var mangaItem = React.createClass({
    propTypes: {
      name: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired
    },
    onClick: function(syntheticEvent) {
      console.log(this.props.url);
    },
    render: function() {
      return (
        React.createElement('li', {},
          React.createElement('button', {type: "button", onClick: this.onClick}, this.props.name)
        )
      );
    }
  });
  return mangaItem;
}

module.exports = MangaItem;
