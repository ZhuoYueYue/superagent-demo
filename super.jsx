request = require('superagent');

export  default class SendMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'user'
        }
    }
    render() {
        return <div>
            <input type="text" value={this.state.name} onChange={this._onTypeChange.bind(this)}/>
            <button onClick={this._handle.bind(this)}>click</button>
        </div>
    }
    _onTypeChange(event){
        this.setState({
            name: event.target.value
        });
    }
    _handle() {
        request
            .get('/a/'+this.state.name)
            .end(function (err, res) {
                if (res.ok) {
                    //console.log(res.text);
                    this.setState({
                        name: res.text
                    })
                } else {
                    //console.log(err);
                }
                alert(res);
            })

    }
}
