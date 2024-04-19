import {useSelector} from 'react-redux';

export default function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme);
  return (
    <div className={theme}>
        <div className={`bg-${theme === 'light' ? 'white' : '[#222831]'} text-${theme === 'light' ? 'gray-700' : 'gray-200'} min-h-screen`}>
            {children}
        </div>
    </div>
  )
}
