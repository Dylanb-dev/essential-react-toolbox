// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import React from 'react';
import ReactDOM from 'react-dom';
import ToolboxApp from 'react-toolbox/lib/app';
import Button from 'react-toolbox/lib/button';
import Header from './components/header';
import style from './style';

ReactDOM.render((
  <ToolboxApp>
    <Header />
    <section className={style.content}>
      Lorem ipsum dolor sit amet, consec
    </section>
    <Button label='test'/>
  </ToolboxApp>
), document.getElementById('app'));
