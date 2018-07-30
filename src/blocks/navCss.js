const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "3rem",
    height: `2em`,
    right: ".5rem",
    top: "1rem"
  },
  bmBurgerBars: {
    background: "white",
    height: ".4rem",
  },
  bmCrossButton: {
    height: "2rem",
    width: "2rem",
    color: "white",
    right: "18px",
    top: "18px"
  },
  bmCross: {
  },
  bmMenuWrap: {
    top: "0",
    right: "0",
    width: "100%",
    transform: "translate3d(calc(100% +20px), 0px, 0px)"
  },
  bmMenu: {
    background: "#E8CFB1",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "white",
    padding: "0.8em",
    height: "calc(100% - 0.8em)"
  },
  bmItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  bmOverlay: {
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.3)",
    transform: "translate3d(calc(100% +20px), 0px, 0px)"
  }
};

export default styles
