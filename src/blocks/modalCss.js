const styles = {
    bmBurgerButton: {
        position: "relative",
        margin: "1em",
        zIndex: 0
    },
    bmBurgerBars: {
        background: "white",
        height: ".4rem",
    },
    bmCrossButton: {
        height: "2rem",
        width: "2rem",
        color: "white"
    },
    bmCross: {
    },
    bmMenuWrap: {
        top: "0",
        right: "0",
        width: "100%"
    },
    bmMenu: {
        background: "white",
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
        overflowY: "scroll"
    },
    bmMorphShape: {
        fill: "#373a47"
    },
    bmItemList: {
        color: "white",
        padding: "0",
    },
    bmItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    bmOverlay: {
        top: "0",
        left: "0",
        background: "rgba(0, 0, 0, 0.3)"
    }
};

export default styles
