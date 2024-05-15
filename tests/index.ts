import '@testing-library/react';

import { beforeEach, beforeAll, afterAll } from '@jest/globals';
import { cleanup } from '@testing-library/react';

beforeAll(() => {});

afterEach(() => {
  cleanup();
});

afterAll(() => {});
