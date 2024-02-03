import React from 'react';
import { withStyles, WithStyles, Theme, StyleRules } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const styles = (theme: Theme): StyleRules => ({
  typography: {
    margin: 200,
  },
});
type HelloProps = WithStyles<typeof styles>;
const Hello: React.FC<HelloProps> = ({ classes }) => (
<Typography className={classes.typography} variant="h6">
    Hello world!
</Typography>
);
export default withStyles(styles)(Hello);