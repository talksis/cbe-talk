import React from 'react';
import {Button} from 'semantic-ui-react'

export default ({history})=>(
    <div>
        찾는 페이지가 없습니다.
        <Button onClick={()=>history.push('/')}>돌아가기</Button>
    </div>
)