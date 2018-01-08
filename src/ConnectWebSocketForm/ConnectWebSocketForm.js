import React from "react";
import { Button, Form } from "semantic-ui-react";

class ConnectWebSocketForm extends React.Component {
    constructor() {
        super();

        this.state = {
            link: "",
            token: "",
        };
        this._onClickConnect = this._onClickConnect.bind(this);
        this._handleAuthorizationChange = this._handleAuthorizationChange.bind(this);
        this._handleLinkChange = this._handleLinkChange.bind(this);
    }

    _onClickConnect() {
        this.props.connectSocket(this.state.link, this.state.token);
    }

    _handleLinkChange(event) {
        this.setState({ link: event.target.value });
    }

    _handleAuthorizationChange(event) {
        this.setState({ token: event.target.value });
    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <label>ws:</label>
                    <input placeholder="localhost" onChange={this._handleLinkChange} />
                </Form.Field>
                <Form.Field>
                    <label>Authorization</label>
                    <input placeholder="token" onChange={this._handleAuthorizationChange} />
                </Form.Field>
                <Button type="submit" onClick={this._onClickConnect}>
                    Connect
                </Button>
            </Form>
        );
    }
}

export default ConnectWebSocketForm;
