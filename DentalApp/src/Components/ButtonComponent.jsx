import React from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonComponent({name}) {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <Button style={{backgroundColor:'#0dcaf085',}} variant="info" type="submit">
                {name}
              </Button>
    </div>
    </>
  )
}
