import './App.sass';
import ImageFunc from './imageFunc';
import DefaultParagraph, { ParagraphLearn } from './components/paragraph/Paragraph';
import Button from './components/button/Button';
import React from 'react';
import { IAppState } from './app-state';
import NameChange from './components/name-change/NameChange';

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
        </header>
      </div>
    );
  }

  private updateNameConfirmed(name: string): void {
    this.setState({name});
  }
}