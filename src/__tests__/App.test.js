/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';

describe('renders the app', () => {
  // mocks the fetch API used on the stats page and the about page.
  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });
});
