var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  { id: 1, text: 'ham' },
  { id: 2, text: 'cheese' },
  { id: 3, text: 'potatoes' }
];

var List = React.createClass({
  renderItems: function () {
    return ingredients.map(function(ingredient) {
      return <ListItem ingredient={ingredient.text} key={ingredient.id} />
    });
  },

  render: function () {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }
});

module.exports = List;
