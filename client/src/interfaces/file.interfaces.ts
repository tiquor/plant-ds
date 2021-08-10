import { ChangeEvent } from 'react';

interface IFileContext {
  files: File[];
  buffers: Uint8Array[];
  progress?: number | string;
  progressInner?: string;
  handleImageChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageDropZone?: (e: File[]) => void;
}

export type { IFileContext };
