import * as React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { AppState } from '../store';
import { toggleInlineStyle } from '../store/actions/documentActions';
import * as sel from '../store/selectors';

const mapStateToProps = (state: AppState) => ({
  boldEnabled: sel.boldEnabled(state),
  italicEnabled: sel.italicEnabled(state),
  underlineEnabled: sel.underlineEnabled(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  onToggleInlineStyle: (style: string) => {
    dispatch(toggleInlineStyle(style));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
