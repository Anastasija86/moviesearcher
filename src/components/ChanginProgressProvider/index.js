
import { useState, useEffect} from "react";

function ChangingProgressProvider({props}) {
    const [valuesIndex, setValuesIndex] = useState(0);
    useEffect(() => {
        setInterval(() =>
            setValuesIndex((valuesIndex + 1) % props.values.length), 1000)
    }, [props.values.length, valuesIndex]);

    return props.children(props.values[valuesIndex]);
};

export { ChangingProgressProvider };

// class ChangingProgressProvider extends React.Component {
//   static defaultProps = {
//     interval: 1000,
//   };

//   state = {
//     valuesIndex: 0,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({
//         valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
//       });
//     }, this.props.interval);
//   }

//   render() {
//     return this.props.children(this.props.values[this.state.valuesIndex]);
//   }
// }

// export default ChangingProgressProvider;
