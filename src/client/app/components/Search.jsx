import React from 'react';
import Word from './Word.jsx';
import styles from './styling/SearchWords.css';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search reviews',
      search: ''
    }
  }

  handleClick(e) {
    let word = e.currentTarget.textContent;
    this.props.filter(word);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  submit() {
    console.log(this.state.search);
    this.props.filter(this.state.search);
  }

  enter(e) {
    if (e.key === 'Enter') {
      console.log('enter clicked');
      this.submit();
    }
  }

  render() {
    return (
      <div>
        <p className={styles.header}>Show reviews that mention</p>
        <div className={styles.search}>
          <span onClick={() => this.submit()} className={styles.icon}><i class="fas fa-search"></i></span><input onKeyPress={(e) => this.enter(e)} onChange={(e) => this.handleChange(e)}placeholder={this.state.placeholder} className={styles.input}></input>
        </div>
        <div onClick={() => this.props.reset()} className={styles.buttons}>All reviews</div>
        {this.props.words.map(word => <Word word={word} handleClick={this.handleClick.bind(this)}/>)}
        <p className={styles.nums}>{this.props.numRev ? `1 - ${this.props.numRev} reviews` : `0 reviews`}</p>
      </div>
    )
  }
}

export default Search;