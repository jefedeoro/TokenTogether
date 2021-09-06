import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { tokenName, symbolName, totalSupply, accountId, email },
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Token Name" secondary={tokenName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Symbol Name" secondary={symbolName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Supply" secondary={totalSupply} />
              </ListItem>
              <ListItem>
                <ListItemText primary="NEAR Account" secondary={accountId} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
            </List>
            <br />

            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={
                (this.continue,
                console.log(this.tokenName, this.symbolName, this.totalSupply))
              }
            >
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
