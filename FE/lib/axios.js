// utils/csrf.js
import axios from 'axios';

const getCsrfToken = async () => {
    try {
        await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
        console.log('CSRF token retrieved successfully');
    } catch (error) {
        console.error('Error retrieving CSRF token:', error);
    }
};


const postDataWithCsrf = async (data) => {
    try {
        // Lấy chuỗi cookie
        const cookieString = document.cookie;
       
        // Kiểm tra xem cookieString có tồn tại không   
        if (cookieString) {
            // Phân tách chuỗi cookie thành mảng các cookie
            const cookies = cookieString.split(';');

            // Tìm cookie XSRF-TOKEN
            const csrftokenCookie = cookies.find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
            console.log("coooooostring",cookieString)
            // Kiểm tra xem cookie XSRF-TOKEN có tồn tại không
            if (csrftokenCookie) {
                // Tách giá trị của cookie XSRF-TOKEN
                const csrftoken = csrftokenCookie.split('=')[1].trim();

                // Gửi yêu cầu POST kèm CSRF token
                await axios.post('http://127.0.0.1:8000/api/products', data, {
                    headers: {
                        'X-XSRF-TOKEN': csrftoken,
                    },
                });
                console.log('Data posted successfully with CSRF token');
            } else {
                console.error('XSRF-TOKEN cookie not found');
            }
        } else {
            console.error('No cookies found');
        }
    } catch (error) {
        console.error('Error posting data with CSRF token:', error);
    }
};

export { getCsrfToken, postDataWithCsrf };
