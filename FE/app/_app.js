
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Thêm các biểu tượng vào thư viện
library.add(fas);

// Sử dụng FontAwesomeIcon trong toàn bộ ứng dụng
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
