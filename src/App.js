import React from 'react';
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import {Provider} from "react-redux";
import {Step, Segment} from 'semantic-ui-react';
import { store } from './redux/store/configureStore';
import 'semantic-ui-css/semantic.min.css';
import VerticalMenu from "./components/verticalmenu/verticalmenu";

const App = () => {

    return (
          <ErrorBoundary>
            <Provider store={store}>
                <Segment>
                    <Step.Group>
                        <VerticalMenu title={'Menu Sections'} id={'section'}/>
                        <VerticalMenu title={'Items'} id={'item'}/>
                        <VerticalMenu title={'Item Options'} id={'option'}/>
                        <VerticalMenu title={'Option Choices'} id={'choice'} />
                    </Step.Group>
                </Segment>
            </Provider>
          </ErrorBoundary>
      );
}

export default App;
