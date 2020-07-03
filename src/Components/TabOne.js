import React, { Component } from 'react';

// material ui
import { Grid, Paper, Divider } from '@material-ui/core';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

// other Components
import { SERIAL_NO, MESSAGE, NO_OF_LECTURES } from '../Constants/Constants';
import { ChaptersData } from '../FakeData/ChapterData';

class TabOne extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div >
                <Grid style={{ textAlign: "left", padding: "5px" }}>
                    <strong>Chapters</strong>
                </Grid>
                <Divider></Divider>
                <div class="container">
                    <Grid container spacing={1}>
                        {ChaptersData.map(o =>
                            <Paper style={{ width: "450px", hight: "50px" }}>
                                <div container spacing={1} style={{ width: "450px", height: "50px" }}>
                                    {o[SERIAL_NO]}
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                    <span >{o[MESSAGE]}</span>
                                    <p style={{ marginRight: "170px", margin: "auto" }}>
                                        <DesktopMacIcon /> {o[NO_OF_LECTURES]}
                                    </p>
                                </div>

                            </Paper>
                        )}
                    </Grid>
                </div>
            </div>
        )
    }
}
export default TabOne;
