import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {it} from '@jest/globals';
import Home from '../app/screens/home';
import {act} from 'react-test-renderer';

describe('home page test', () => {
  it('renders components correctly', async () => {
    const navigation = {navigate: jest.fn()};
    const tree = render(<Home navigation={navigation as any} />);
    await act(async () => {
      expect(tree).toMatchSnapshot();
    });
  });

  it('test onscroll event on flatlist', async () => {
    const navigation = {navigate: jest.fn()};
    const {getByTestId} = render(<Home navigation={navigation as any} />);
    fireEvent.scroll(getByTestId('taskList'), {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 150, x: 0},
        layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
      },
    });
  });
});
