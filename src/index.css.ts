import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const tokenStyle = Styles.style({
  $nest: {
    '&:hover': {
      background: Theme.action.hover
    },
    '&.is-selected': {
      background: Theme.action.active,
      $nest: {
        '.token-symbol': {
          fontWeight: 600
        }
      }
    }
  }
})

export default Styles.style({
  $nest: {
    '.full-width': {
      width: '100%',
      $nest: {
        '.modal': {
          padding: 0
        }
      }
    },
    '.box-shadow > div': {
      boxShadow: '0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)'
    },
    '.is-ellipsis': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    '.sort-panel': {
      marginBlock: '0.5rem',
      $nest: {
        'i-icon': {
          width: '10px',
          height: '14px',
          display: 'flex',
          fill: Theme.text.primary,
          position: 'absolute',
          right: '0',
          cursor: 'pointer'
        },
        '.icon-sort-up': {
          top: '2px',
        },
        '.icon-sort-down': {
          bottom: '2px',
        },
        '.icon-sorted': {
          fill: Theme.colors.primary.main,
        }
      }
    },
    '.search-input': {
      $nest: {
        'input': {
          padding: '1rem 1.5rem 1rem 2.25rem'
        }
      }
    },
    '.centered': {
      transform: 'translateY(-50%)'
    },
    '.pointer': {
      cursor: 'pointer'
    },
    '.common-token:hover': {
      border: `1px solid ${Theme.colors.primary.main}`
    },
    '.btn-import': {
      background: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '1rem',
      padding: '0.25rem 1.25rem'
    },
    '#btnToken': {
      justifyContent: 'space-between'
    }
  }
})
