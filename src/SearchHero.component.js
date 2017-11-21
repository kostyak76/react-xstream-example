import React from 'react';


export class SearchHero extends React.Component {
  /**
   *
   * @param {object} props
   * @param {Function} props.onSearch
   */
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }

  onChange(value) {
    this.setState({
      searchString: value
    });
    this.props.onSearch(value);
  }


  render() {
    return (
      <div className="form-group row">
        <div className="col-md-12">
          <input type="text"
                 className="form-control"
                 placeholder="Search Hero"
                 onChange={e => this.onChange(e.target.value)}
                 value={this.state.searchString}/>
        </div>
      </div>
    );
  }
}
