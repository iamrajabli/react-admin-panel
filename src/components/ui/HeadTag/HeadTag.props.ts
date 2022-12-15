import { ReactNode } from 'react';

export interface IHeadTag {
    children: ReactNode,
    tag: 'h1' | 'h2' | 'h3'
}