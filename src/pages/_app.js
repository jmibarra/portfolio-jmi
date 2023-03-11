import Theme from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
    return (
        <>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </>
    );
}
