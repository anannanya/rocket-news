import { Tabs } from 'antd'

const { TabPane } = Tabs
export default function MobileTabs() {
    return (
        <div>
            <Tabs className='mobileTabs'>
                <TabPane tab='头条' key='1'>

                </TabPane>
                <TabPane tab='社会' key='2'>

                </TabPane>
                <TabPane tab='国内' key='3'>

                </TabPane>
                <TabPane tab='国际' key='4'>

                </TabPane>
                <TabPane tab='娱乐' key='5'>

                </TabPane>
                <TabPane tab='体育' key='6'>

                </TabPane>
                <TabPane tab='科技' key='7'>

                </TabPane>
                <TabPane tab='时尚' key='8'>

                </TabPane>
            </Tabs>
        </div>
    )
}