import React, { Component } from 'react';

class App extends Component {

  iframe () {
    return {
      __html: '<iframe src="http://wangftp.wustl.edu/~dli/emb.html" width="1000" height="600"></iframe>' 
    }
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={ this.iframe() } />
      </div>
    );
  }
}



export default App;
