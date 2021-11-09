import './App.sass';
import React from 'react';
import { IAppState } from './app-state';
import { Outlet } from 'react-router';
import Button from '../../../modules/home/button/Button';
import ImageFunc from '../../../modules/home/image/imageFunc';
import NameChange from '../../../modules/home/name-change/NameChange';
import DefaultParagraph, { ParagraphLearn } from '../../../modules/home/paragraph/Paragraph';
import NavButton from '../../../shared/nav-button/nav-button-func';

export default class App extends React.Component {
  state: IAppState = { name: "Default name" };

  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <ImageFunc altText="logo" />
          <DefaultParagraph />
          <ParagraphLearn learnText="Custom learning" />
          <Button text="Hit Me!" />
          <NameChange name={this.state.name} nameChangeConfirmed={this.updateNameConfirmed.bind(this)} />
          <NavButton to="/page2" text="Page2" />
        </header>
        <Outlet />
      </div>
    );
  }

  private updateNameConfirmed(name: string): void {
    this.setState({name});
  }
}