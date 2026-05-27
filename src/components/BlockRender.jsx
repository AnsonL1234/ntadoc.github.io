import { Code, H1, Paragraph } from './BlockComponents';

export function BlockRender({ block }) {
    if (!block || !block.type) return null;

    switch (block.type) {
        case 'H1': <H1 />;
        case 'Code': <Code />;
    }
};
