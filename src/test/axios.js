import axios from 'axios'

export async function test() {
    const res = axios.get('https://www.showdoc.com.cn/server/api/user/login')
    console.log(res)
}
