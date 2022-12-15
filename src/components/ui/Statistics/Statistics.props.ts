import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IStatistics extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    result: number;
}