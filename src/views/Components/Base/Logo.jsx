import {useTheme} from '../../../context/theme.context.jsx';

export default function Logo({white = false, ...props}) {
  const {theme} = useTheme();
  if (white)
    return <img src="/assets/images/brand/logo-mono.png" {...props}/>;
  return (
      theme === 'light' ?
          <img src="/assets/images/brand/logo-light.png" {...props}/>
          :
          <img src="/assets/images/brand/logo-dark.png" {...props}/>
  )
      ;
}
export const Symbol = ({white = false, ...props}) => {
  return (
      white ?
          <img src="/assets/images/brand/symbol-mono.png" {...props}/>
          :
          <img src="/assets/images/brand/symbol.png" {...props}/>
  )
      ;
}
