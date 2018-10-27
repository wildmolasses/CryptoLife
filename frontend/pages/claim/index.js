import React, { Component } from "react";
import styled, { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import Head from "next/head";
import MetamaskSigner from "../../components/MetamaskSigner/MetamaskSigner.js";
import AddressValidator from "../../components/AddressValidator/AddressValidator.js";

export default class Claim extends Component {
  render() {
    return (
      <div>
        <div>
          <MetamaskSigner />
        </div>
        <div>
          <AddressValidator address="0x447877f5d22bb91f87a71c71d0270d5ba2ac2040" />
        </div>
      </div>
    );
  }
}
