```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.setState({ data, isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) {
      return <Text>Loading...</Text>;
    } else if (data) {
      return (
        <Text>{data.someProperty}</Text>
      );
    } else {
      return <Text>No data found.</Text>;
    }
  }
}
```
This solution uses a loading indicator to inform the user. It also handles the case where the data might not be found, showing an appropriate message.  The key is to only attempt to render dependent on available data, avoiding crashes from accessing null or undefined state.