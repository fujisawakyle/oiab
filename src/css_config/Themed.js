import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

const baseTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../css_config/themes/base.scss');
const darkTheme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../css_config/themes/dark.scss');

class Themed extends Component {
    render() {
        const theme = this.props.dark ? darkTheme : baseTheme;
        return (
            <ThemeProvider theme={theme}>
                {this.props.children}
            </ThemeProvider>
        );
    }
}

export default Themed;