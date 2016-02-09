// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import React from 'react';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
import Header from './components/header';
import style from './style';

export default class LandingPage extends React.Component {
  render() {
    return (
      <ToolboxApp>
        <Header />
        <section className={style.content}>
          React Toolbox example
        </section>
        <Button label="test"/>
      </ToolboxApp>
    );
  }
}
