import React from 'react';
import Detail from '../components/Detail';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Detail id={this.props.match.params.id} />
      </div>
    )
  }
}
