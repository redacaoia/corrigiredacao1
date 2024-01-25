'use client'

import { useMemo } from 'react';
import { createAvatar } from '@dicebear/core';
import {micah  } from '@dicebear/collection';



export function CreateAvatarProfile() {

  const avatarProfile = useMemo(() => {
    return createAvatar(micah, {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);
  
  return avatarProfile
}

