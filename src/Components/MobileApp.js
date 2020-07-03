import React, { Component } from 'react';

// material ui
import {Grid, Paper,FormControl, Tabs, Tab, InputBase, AppBar, Divider, Drawer, Toolbar, IconButton, Typography, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search';

// other Components
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree'

class MobileApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            tabValue: 0
        }
    }
    componentDidMount() {

    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleChangeTab = (i, tabValue) => {
        console.log(tabValue)
        this.setState({ tabValue })
    }

    render() {
        const { open, tabValue } = this.state;
        return (
            <div>
                <AppBar position="static" >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            style={{ paddingRight: "100px" }}
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" >
                            <img src="https://www.learncab.com/hubfs/icon-lvl3.svg" alt="icon-lvl3" width="20" />
                            <strong>  CA</strong> Final
                        </Typography>

                        <Drawer
                            variant="persistent"
                            anchor="left"
                            open={open} >
                            <div>
                                <IconButton onClick={this.handleDrawerClose}>
                                    <ChevronRightIcon />
                                </IconButton>
                                <List>
                                    {['Option1', 'Option2'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {['Option3', 'Option4'].map((text, index) => (
                                        <ListItem button key={text}>
                                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </div>
                        </Drawer>

                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            style={{ paddingRight: "100px" }, { marginLeft: "100px" }}>
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                    <div>
                        <InputBase
                            placeholder="Search for papers, chapters and Lectures"
                            inputProps={{ 'aria-label': 'search', "color":"white" }}

                        />
                        <SearchIcon edge="end" />
                    </div>
                </AppBar>
                <Grid style={{textAlign:"left"}}>
                <strong>PAPERS</strong>
                </Grid>
                <Paper style={{width: "450px", hight:"50px"}} elevation={3}>
                <FormControl variant="outlined" style={{ margin: "20px", minWidth: "300px" }}>
                <Grid container  spacing={3}>
                    <label>Paper 1</label>
                    <select name="color" style={{ fontSize:"10px", width: "90%", border:"0px", outline:"0px"}}>
                        <option value="">Strategic Cost Management and Performance Evaluation dropdown</option>
                        <option value="paper2">Strategic Cost Management and Performance Evaluation dropdown1</option>
                        <option value="paper3">Strategic Cost Management and Performance Evaluation dropdown2</option>
                        <option value="paper4">Strategic Cost Management and Performance Evaluation dropdown3</option>
                    </select>
                    </Grid>
                </FormControl>
                </Paper>
                <div>
                    <Tabs value={tabValue} onChange={this.handleChangeTab} aria-label="simple tabs example">
                        <Tab label="Series 1" />
                        <Tab label="Series 2" />
                        <Tab label="Series 3" />
                    </Tabs>
                </div>
                {tabValue === 0 && <TabOne />}
                {tabValue === 1 && <TabTwo />}
                {tabValue === 2 && <TabThree />}

            </div>
        );
    }
}

export default MobileApp;
