import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as prestagingActions from '../../actions/prestagingActions';

class PrestagingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      prestaging: {
        team: '',
        host: '',
        vm_name: '',
        email_list: '',
        memory: 4,
      },
    };
    this.onTeamChange = this.onTeamChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTeamChange(event) {
    // eslint-disable-next-line
    const prestaging = this.state.prestaging;
    prestaging.team = event.target.value;
    this.setState({ prestaging });
  }

  onClickSave() {
    this.props.actions.createPrestaging(this.state.prestaging);
  }
  // eslint-disable-next-line
  prestagingRow(prestaging, index) {
    return <div key={index}>{prestaging.team}</div>;
  }
  render() {
    return (
      <div>
        <h1>Automatic Media Deployment</h1>
        {this.props.prestaging.map(this.prestagingRow)}
        <h2>Add New Deployment Instance</h2>
        <input type="text" onChange={this.onTeamChange} value={this.state.prestaging.team} />
        <input type="submit" value="save" onClick={this.onClickSave} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    prestaging: state.prestaging,
  };
}

PrestagingPage.propTypes = {
  prestaging: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(prestagingActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrestagingPage);
