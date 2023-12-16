import React from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonComponent({name}) {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <Button variant="primary" type="submit">
                {name}
              </Button>
    </div>
    </>
  )
}
