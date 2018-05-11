import * as React from 'react';
import { connect } from 'react-redux';
import Toolbar from '../components/Toolbar';
import { AppState } from '../store';
import { toggleBlockStyle, toggleInlineStyle } from '../store/actions/documentActions';
import * as sel from '../store/selectors';

const mapStateToProps = (state: AppState) => {
  return {
    boldEnabled: sel.boldEnabled(state),
    italicEnabled: sel.italicEnabled(state),
    underlineEnabled: sel.underlineEnabled(state),
    textAlign: sel.currentTextAlign(state)
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onToggleInlineStyle: (style: string) => {
    dispatch(toggleInlineStyle(style));
  },
  onToggleBlockStyle: (style: string) => {
    dispatch(toggleBlockStyle(style));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
