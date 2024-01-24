import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import {micah  } from '@dicebear/collection';

export const createAvatarProfile = useMemo(() => {
  return createAvatar(micah, {
    size: 128,
    // ... other options
  }).toDataUriSync();
}, []);
