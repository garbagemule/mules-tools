import React, { useEffect, useState } from 'react'

import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/theme-chrome'

const CodeEditor = (props) => {
  const [code, setCode] = useState(props.value)

  useEffect(() => {
    props.onChange(code)
  }, [code])

  return (
    <AceEditor
      mode="yaml"
      theme="chrome"
      width="100%"
      height="100%"
      value={code}
      onChange={setCode}
      showPrintMargin={false}
    />
  )
}

export default CodeEditor
