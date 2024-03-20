import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'


const driverObj = driver({
  // 展示步骤
  showProgress: false,
  steps: [
    {
      element: '#Navigation',
      popover: { title: '这是导航栏', description: '这是导航栏Description' },
    },
    {
      element: '#Header',
      popover: {
        title: '这是顶部展示栏',
        description: '这是顶部展示栏Description',
      },
    },
    {
      element: '#content',
      popover: {
        title: '这是内容展示区',
        description: '这是内容展示区Description',
      },
    },
  ],
})

export default driverObj
