import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';

const styles = createStyleSheet(theme => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
}));

class PositionDrawer extends React.Component {
  state = {
    open: false
  };

  toggleDrawer = (open) => {
    this.setState({ open: open });
  };

  handleOpen = () => {
    this.toggleDrawer(true);
  };

  handleClose = () => {
    this.toggleDrawer(false);
  };

  render() {
    const classes = this.props.classes;

    const sideList = (
      <div>
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText inset primary="Inbox" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Right</Button>
        <Drawer
          anchor="right"
          open={this.state.open}
          onRequestClose={this.handleClose}
          onClick={this.handleClose}
        >
          {sideList}
        </Drawer>
      </div>
    );
  }
}

PositionDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionDrawer);