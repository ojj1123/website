import { darkTheme, styled } from '@modulz/design-system';

export const DemoButton = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  color: '$hiContrast',
  fontSize: '$2',
  lineHeight: 1,
  m: 0,
  py: 0,
  px: '$2',
  height: '$5',
  br: '$2',

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$grayA8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },

  variants: {
    variant: {
      white: {
        backgroundColor: '$whiteA11',
        '@hover': {
          '&:hover': {
            bc: '$whiteA12',
          },
        },
        [`.${darkTheme} &`]: {
          backgroundColor: '$whiteA5',
          '@hover': {
            '&:hover': {
              bc: '$whiteA6',
            },
          },
        },
      },
      gray: {
        backgroundColor: '$grayA4',
        '@hover': {
          '&:hover': {
            bc: '$grayA5',
          },
        },
      },
    },
  },

  defaultVariants: {
    variant: 'white',
  },
});
