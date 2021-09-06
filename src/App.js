import "regenerator-runtime/runtime";
import React from "react";
import { login, logout } from "./utils";
import "./global.css";
// import UserForm from "./components/UserForm";
import getConfig from "./config";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
import {
  Container,
  // Row,
  // Col,
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Form,
} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'
import history from "react-router-dom";

const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  // use React Hooks to store greeting in component state
  const [greeting, set_greeting] = React.useState();

  // when the user has not yet interacted with the form, disable the button
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false);

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
        window.contract
          .get_greeting({ account_id: window.accountId })
          .then((form) => {
            set_greeting(TokenContract);
          });
      }
    },

    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
    []
  );
  function handleCLick() {
    <Form />;
  }
  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <h1>Welcome to Token Together!</h1>
        <p style={{ textAlign: "center", marginTop: "2.5em" }}>
          <h2>Token Together is a Token Mintery.</h2>

          <br></br>
          <h3>
            Here you can create your own cryptocurrency
            <br></br>
          </h3>
          <h2>with NO CODING!</h2>
          <h3>
            If you have a project in mind or just want to reserve your Token
            Name and Symbol.
          </h3>
          <br></br>
          <h2>You can mint as many as you want.</h2>
          <br></br>
          <h3>
            And thanks to the power of the NEAR blockchain they can be in your
            wallet within moments of reading this.
          </h3>
        </p>
        <h4>
          Please sign in or sign up now. The button below will bring you to NEAR
          Wallet.
        </h4>

        <p style={{ textAlign: "center", marginTop: "2.5em" }}>
          <button onClick={login}>Sign in</button>
        </p>
      </main>
    );
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <button className="link" style={{ float: "right" }} onClick={logout}>
        Sign out
      </button>

      <main>
        <h1>
          <label
            htmlFor="greeting"
            style={{
              color: "var(--secondary)",
              borderBottom: "2px solid var(--secondary)",
            }}
          >
            {greeting}
          </label>
          {
            " " /* React trims whitespace around tags; insert literal space character when needed */
          }
          {window.accountId}!
        </h1>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            // get elements from the form using their id attribute
            const { fieldset, greeting } = event.target.elements;

            // hold onto new user-entered value from React's SynthenticEvent for use after `await` call
            const newGreeting = greeting.value;

            // disable the form while the value gets updated on-chain
            fieldset.disabled = true;

            try {
              // make an update call to the smart contract
              await window.contract.set_greeting({
                // pass the value that the user entered in the greeting field
                message: newGreeting,
              });
            } catch (e) {
              alert(
                "Something went wrong! " +
                  "Maybe you need to sign out and back in? " +
                  "Check your browser console for more info."
              );
              throw e;
            } finally {
              // re-enable the form, whether the call succeeded or failed
              fieldset.disabled = false;
            }

            // update local `greeting` variable to match persisted value
            set_greeting(newGreeting);

            // show Notification
            setShowNotification(true);

            // remove Notification again after css animation completes
            // this allows it to be shown again next time the form is submitted
            setTimeout(() => {
              setShowNotification(false);
            }, 11000);
          }}
        >
          {/* <fieldset id="fieldset">
            <label
              htmlFor="greeting"
              style={{
                display: 'block',
                color: 'var(--gray)',
                marginBottom: '0.5em'
              }}
            >
              Change greeting
            </label>
            <div style={{ display: 'flex' }}>
              <input
                autoComplete="off"
                defaultValue={greeting}
                id="greeting"
                onChange={e => setButtonDisabled(e.target.value === greeting)}
                style={{ flex: 1 }}
              />
              <button
                disabled={buttonDisabled}
                style={{ borderRadius: '0 5px 5px 0' }}
              >
                Save
              </button>
            </div>
          </fieldset> */}
        </form>

        {/* <ol>
          <li>
            Come up with an Awesome name for Your Token! For best compatiblity
            with Dapps select a name between 3 - 12 letters, No spaces. That
            being said you can name it as you like.
          </li>
          <li>
            Now that you have the Name of Your Token. Think of a shortened
            Symbol to represent it. For best compatiblity with Dapps select a
            name between 3 - 6 letters, No spaces.
          </li>
          <li>
            Now that the difficult questions are figured out. You just need to
            pick how many of your New Tokens you want. You can select any Number
            above 50! There is no Max limit!
          </li>
        </ol> */}

        <Container style={{ alignContent: "center", textAlign: "center" }}>
          {" "}
          <Form style={{ color: "#fff" }}>
            <h2>Just 3 steps from Your Tokens:</h2>
            <Form.Group controlId="formTokenName">
              {/* <Form.Label>Token Name</Form.Label> */}
              <BreadcrumbItem>Token Name</BreadcrumbItem>

              <Form.Control
                style={{ color: "fff" }}
                id="tokenName"
                type="text"
                placeholder="TokenName"
              />

              <Card.Title className={{ color: "#fff" }}>
                <br></br>
                Come up with an Awesome name for Your Token! For best
                compatiblity with Dapps select a name between 3 - 12 letters, No
                spaces. That being said you can name it as you like.
              </Card.Title>
            </Form.Group>
            <h3></h3>
            <Form.Group controlId="formTokenSymbol">
              {/* <Form.Label>Token Symbol</Form.Label> */}
              <BreadcrumbItem>Token Symbol</BreadcrumbItem>

              <Form.Control
                style={{ color: "fff" }}
                id="tokenSymbol"
                type="text"
                placeholder="SYM"
              />

              <Card.Title className={{ color: "#fff" }}>
                <br></br>
                Now that you have the Name of Your Token. Think of a shortened
                Symbol to represent it. For best compatiblity with Dapps select
                a name between 3 - 6 letters, No spaces.
              </Card.Title>
            </Form.Group>
            <h3></h3>
            <Form.Group controlId="formTotalSupply">
              {/* <Form.Label>TotalSupply</Form.Label> */}
              <BreadcrumbItem>Total Supply</BreadcrumbItem>

              <Form.Control
                style={{ color: "fff" }}
                id="totalSuppy"
                type="number"
                placeholder="Total Supply"
                min="33"
              />

              <Card.Title className={{ color: "#fff" }}>
                <br></br>
                Now that the difficult questions are figured out. You just need
                to pick how many of your New Tokens you want. You can pick any
                number above 33. There is NO MAX LIMIT!!! Get as many as you
                want.
              </Card.Title>
            </Form.Group>
          </Form>
          <Card>
            <Card.Img />
            <Card.Body>
              <Form.Text>
                There is a 3 NEAR fee which includes your contract storage fee.
              </Form.Text>
              <p></p>
              <Card.Title>
                Once you are happy with everything above click Mint
              </Card.Title>
              <p></p>
              <Button variant="primary">MINT</Button>
            </Card.Body>
          </Card>
          <Breadcrumb></Breadcrumb>
        </Container>

        <p>
          For more info and to join the community, check out{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/YJGEpXNf"
          >
            our Discord server{" "}
          </a>{" "}
          or Join our{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sputnik.fund/#/dao/tokentogether.sputnikdao.near"
          >
            TokenTogether DAO
          </a>{" "}
          and have your say in where the protocol goes in the future.
        </p>
      </main>

      {showNotification && <Notification />}
    </>
  );
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`;
  return (
    <aside>
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.accountId}`}
      >
        {window.accountId}
      </a>
      {
        " " /* React trims whitespace around tags; insert literal space character when needed */
      }
      called method: 'set_greeting' in contract:{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href={`${urlPrefix}/${window.contract.contractId}`}
      >
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  );
}
