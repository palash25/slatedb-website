"use strict";(self.webpackChunkslatedb_website=self.webpackChunkslatedb_website||[]).push([[822],{7495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),o=n(8453);const i={sidebar_position:2},r="Quickstart",a={id:"quickstart",title:"Quickstart",description:"SlateDB is a Rust library. It doesn't currently ship with any language bindings, so you must use Rust or generate your own bindings.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/slatedb/slatedb-website/tree/main/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration",permalink:"/docs/configuration"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(t.p,{children:"SlateDB is a Rust library. It doesn't currently ship with any language bindings, so you must use Rust or generate your own bindings."}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.p,{children:["SlateDB is not published to crates.io yet. Add the following to your ",(0,s.jsx)(t.code,{children:"Cargo.toml"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'[dependencies]\nslatedb = { git = "https://github.com/slatedb/slatedb.git" }\n'})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["SlateDB uses ",(0,s.jsx)(t.a,{href:"https://crates.io/crates/tokio",children:(0,s.jsx)(t.code,{children:"tokio"})})," as its async runtime and ",(0,s.jsx)(t.a,{href:"https://docs.rs/object_store/latest/object_store/",children:(0,s.jsx)(t.code,{children:"object_store"})})," to interact with object storage. The code below shows a simple in-memory example."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use bytes::Bytes;\nuse object_store::{ObjectStore, memory::InMemory, path::Path};\nuse slatedb::db:Db;\nuse slatedb::config::{CompactorOptions, DbOptions};\nuse std::{sync::Arc, time::Duration};\n\n#[tokio::main]\nasync fn main() {\n    // Setup\n    let object_store: Arc<dyn ObjectStore> = Arc::new(InMemory::new());\n    let options = DbOptions {\n        flush_ms: 100,\n        manifest_poll_interval: Duration::from_millis(100),\n        min_filter_keys: 10,\n        l0_sst_size_bytes: 128,\n        compactor_options: Some(CompactorOptions::default()),\n    };\n    let kv_store = Db::open(\n        Path::from("/tmp/test_kv_store"),\n        options,\n        object_store,\n    )\n    .await\n    .unwrap();\n\n    // Put\n    let key = b"test_key";\n    let value = b"test_value";\n    kv_store.put(key, value).await;\n\n    // Get\n    assert_eq!(\n        kv_store.get(key).await.unwrap(),\n        Some(Bytes::from_static(value))\n    );\n\n    // Delete\n    kv_store.delete(key).await;\n    assert!(kv_store.get(key).await.unwrap().is_none());\n\n    // Close\n    kv_store.close().await.unwrap();\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);