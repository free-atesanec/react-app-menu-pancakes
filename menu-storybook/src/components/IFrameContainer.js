import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const IFrameContainer = ({
                         children,
                         ...props
                       }) => {
  const [ref, setRef] = useState(null);
  const nodeToMount =
    ref?.contentWindow?.document?.body;

  return (
    <iframe {...props} ref={setRef}>
      {nodeToMount && createPortal(children, nodeToMount)}
    </iframe>
  )
}
