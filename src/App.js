import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import ConnectWebSocketForm from "./ConnectWebSocketForm/ConnectWebSocketForm";
import NotificationFeed from "./NotificationFeed/NotificationFeed";

class App extends Component {
    constructor() {
        super();

        this.state = {
            notifications: [],
        };

        this.ws = undefined;
        this._connectSocket = this._connectSocket.bind(this);
    }
    _connectSocket(link, token) {
        if (!link || !token) {
            console.error("No link provided");
            return;
        }
        const ws = new WebSocket(`ws://${link}?token=${token}`);
        const _self = this;

        ws.onmessage = event => {
            const payload = JSON.parse(event.data);
            if (payload.status) {
                setInterval(() => {
                    ws.send("ping");
                }, 5000);
            }

            if (payload.notification) {
                const notifications = _self.state.notifications;
                _self.setState({ notifications: notifications.concat(payload) });
            }
            console.log(JSON.parse(event.data));
        };

        ws.onerror = () => {
            console.log("Error");
        };

        ws.onclose = () => {
            console.log("Connection closed");
        };
    }

    render() {
        return (
            <Grid columns={1} container>
                <Grid.Row>
                    <div className="App">
                        <ConnectWebSocketForm connectSocket={this._connectSocket} />
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <NotificationFeed notifications={this.state.notifications} />
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
