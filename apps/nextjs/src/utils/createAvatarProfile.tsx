"use client";

import { useMemo } from "react";
import { micah } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

export function CreateAvatarProfile() {
  const avatarProfile = useMemo(() => {
    return createAvatar(micah, {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);

  return avatarProfile;
}
