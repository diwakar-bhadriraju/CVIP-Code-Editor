import React, { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from "./components/Compiled";
import background from './assets/cities.jpg';

function App() {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  const onChangeHtml = useCallback((value: React.SetStateAction<string>) => {
    setHtml_Edit(value);
  }, []);

  const onChangeCss = useCallback((value: React.SetStateAction<string>) => {
    setCss_Edit(value);
  }, []);

  const onChangeJavaScript = useCallback(
    (value: React.SetStateAction<string>) => {
      setJs_Edit(value);
    },
    []
  );

  const srcCode = `
    <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
    </html>
  `;

  return (
    <div className="h-screen flex flex-col">
      <div className="relative flex-1 p-4">
        <div
          className="absolute top-0 left-0 w-full h-full blur-sm"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            filter: "blur(5px)",
            zIndex: -1,
          }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 relative z-10">
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border border-gray-700"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html()]}
              onChange={onChangeHtml}
            />
          </div>

          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border border-gray-700"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css()]}
              onChange={onChangeCss}
            />
          </div>

          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border border-gray-700"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript()]}
              onChange={onChangeJavaScript}
            />
          </div>

          <div className="lg:col-span-3">
            <Result srcCode={srcCode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
