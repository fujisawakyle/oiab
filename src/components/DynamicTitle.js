import React, { Component } from "react";
import Media from "react-media";

import TitleWithChevron from "../components/TitleWithChevron";

import { P } from "../elements";

export default class DynamicTitle extends Component {
    render() {
        const { title, chevronColor } = this.props
        return (
            <div style={{ width: "100%" }}>
                <Media query="(max-width: 768px)">
                    {matches =>
                        matches ? (
                            <P
                                align={"center"}
                                weight={"bold"}
                                marginTop={"1em"}
                            >
                                {title}
                            </P>
                        ) : (
                                <TitleWithChevron title={title} chevronColor={chevronColor} />
                            )
                    }
                </Media>
            </div>
        )
    }
}