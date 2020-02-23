import React,{useContext} from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";
import VideocamIcon from "@material-ui/icons/Videocam";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import {BackGroundContext} from '../../../../Contexts/BackGroundContext'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
    borderRadius: "0 0 20px 0",
    minHeight: "500px"
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const {setBg} = useContext(BackGroundContext)

  const handleChangeIndex = index => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          style={{ backgroundColor: "white", borderRadius: "20px" }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab
            onClick={e=>{setBg(false)}}
            label={
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "5px" }}>Movies</span>{" "}
                <VideocamIcon />
              </span>
            }
            {...a11yProps(0)}
          />
          <Tab
            onClick={e=>{setBg(true)}}
            label={
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "5px" }}>Music</span>{" "}
                <MusicNoteIcon />
              </span>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} style={{}}>
          {props.movie}
        </TabPanel>
        <TabPanel value={value} index={1} style={{}}>
          {props.music}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
