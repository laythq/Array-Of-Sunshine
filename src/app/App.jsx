import React, { Component } from 'react';
import { change } from './placeholder_model_EF';
import Summary from './summary'

// class Summary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: null,
//       output: null,
//       history: [],
//     };
//
//     this.setInputOutput = this.setInputOutput.bind(this);
//     this.logSuggestion = this.logSuggestion.bind(this);
//   }
//
//   setInputOutput(input, output) {
//     this.setState({
//       input,
//       output,
//     });
//   }
//
//   logSuggestion(input, output, code) {
//     this.state.history.push(`${input} > ${output} = ${code}`);
//   }
//
//   render() {
//     return (
//       <div>
//         <div>
//           User Input:
//           <InputForm
//             setInputOutput={this.setInputOutput}
//           />
//         </div>
//         <div>
//           Code Suggestion:
//           <CodeSuggestion
//             input={this.state.input}
//             output={this.state.output}
//             logSuggestion={this.logSuggestion}
//           />
//         </div>
//         <div>
//           History:
//           <History
//             history={this.state.history}
//           />
//         </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <Summary />
      </div>
    );
  }
}

export default App;
