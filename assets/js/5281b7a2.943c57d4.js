"use strict";(self.webpackChunkslatedb_website=self.webpackChunkslatedb_website||[]).push([[443],{8798:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(4848),i=s(8453);const r={sidebar_position:4},o="Architecture",a={id:"architecture",title:"Architecture",description:"SlateDB is a log-structured merge-tree (LSM-tree). If you are unfamiliar with LSM-trees, we recommend reading the following resources:",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/slatedb/slatedb-website/tree/main/docs/architecture.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"FAQ",permalink:"/docs/faq"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Writes",id:"writes",level:2},{value:"Reads",id:"reads",level:2},{value:"Manifest",id:"manifest",level:2},{value:"Compaction",id:"compaction",level:2},{value:"Backpressure",id:"backpressure",level:3},{value:"Garbage Collection",id:"garbage-collection",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:"SlateDB is a log-structured merge-tree (LSM-tree). If you are unfamiliar with LSM-trees, we recommend reading the following resources:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/facebook/rocksdb/wiki/RocksDB-Overview",children:"RocksDB Overview"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://skyzh.github.io/mini-lsm/",children:"Mini-LSM"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This page contains a high-level overview of SlateDB's architecture, read/write paths, manifest, and compaction. For more details, see SlateDB's ",(0,n.jsx)(t.a,{href:"https://github.com/slatedb/slatedb/tree/main/docs",children:"design documents"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"The following diagram shows the architecture of SlateDB:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Example banner",src:s(4068).A+"",width:"1115",height:"793"})}),"\n",(0,n.jsx)(t.p,{children:"At a high level, SlateDB consists of the following components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Write-ahead log (WAL)"}),": A mutable WAL that stores recent writes that have not yet been written to object storage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Immutable WAL"}),": A WAL that has been frozen and is in the process of being written to object storage in the ",(0,n.jsx)(t.code,{children:"wal"})," directory."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Memtable"}),": An in-memory data structure that stores recent writes that have been written to the object store's WAL directory, but not yet written to L0."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Frozen memtable"}),": An immutable memtable that is in the process of being written to object storage in the ",(0,n.jsx)(t.code,{children:"compacted"})," directory."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"wal"})," SSTs"]}),": SSTables that store recent WAL entries on object storage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:"L0"})," SSTs"]}),": SSTables that store recent memtables on object storage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sorted runs (SRs)"}),": A sequence of compacted, range partitioned SSTables that are treated as a single logical table."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"writes",children:"Writes"}),"\n",(0,n.jsx)(t.p,{children:"SlateDB's write path is as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"put"})," call is made on the client."]}),"\n",(0,n.jsx)(t.li,{children:"The key/value pair is written to the mutable, in-memory WAL table."}),"\n",(0,n.jsxs)(t.li,{children:["After ",(0,n.jsx)(t.code,{children:"flush_ms"})," milliseconds, the mutable WAL table is frozen and an asynchronous write to object storage is triggered."]}),"\n",(0,n.jsxs)(t.li,{children:["When the write succeeds, insert the immutable WAL into the mutable memtable and notify ",(0,n.jsx)(t.code,{children:"await"}),"'ing clients."]}),"\n",(0,n.jsxs)(t.li,{children:["When the memtable reaches a ",(0,n.jsx)(t.code,{children:"l0_sst_size_bytes"}),", it is frozen and written as an L0 SSTable in the object store's ",(0,n.jsx)(t.code,{children:"compacted"})," directory."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"reads",children:"Reads"}),"\n",(0,n.jsx)(t.p,{children:"SlateDB's read path is as follows:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.code,{children:"get"})," call is made on the client."]}),"\n",(0,n.jsx)(t.li,{children:"The value is returned from the mutable memtable if found."}),"\n",(0,n.jsx)(t.li,{children:"The value is returned from the immutable memtable(s) if found."}),"\n",(0,n.jsx)(t.li,{children:"The value is returned from the L0 SSTables if found (searched from newest to oldest using bloom filtering)."}),"\n",(0,n.jsx)(t.li,{children:"The value is returned from the sorted runs if found (searched from newest to oldest using bloom filtering)."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Reads with ",(0,n.jsx)(t.code,{children:"ReadLevel::Uncommitted"})," will scan the in-memory WAL table--first mutable then immutable--before step (1) above. This allows such readers to see WAL writes that have not yet been committed to object storage (and might subsequently fail, and be lost)."]})}),"\n",(0,n.jsx)(t.h2,{id:"manifest",children:"Manifest"}),"\n",(0,n.jsx)(t.p,{children:"SlateDB's manifest file contains the current state of the database, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"manifest_id"}),": An auto-incrementing ID that's incremented every time a new manifest is written."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"writer_epoch"}),": The current writer epoch. This field is used to detect zombie writers. There can be only one active writer at a time. Older writers are fenced off by the newer writer by incrementing this epoch."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"compactor_epoch"}),": The current compactor epoch. As with the ",(0,n.jsx)(t.code,{children:"writer_epoch"}),", this field is used to guarantee that there is only one active compactor at a time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"wal_id_last_compacted"}),": The last WAL ID that was contained in a memtable written to L0 at the time the manifest was written. WAL SSTables older than this ID should not be read and are eligible for garbage collection."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"wal_id_last_seen"}),": The most recent WAL ID seen at the head of the WAL at the time the manifest was written."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"l0_last_compacted"}),": The Last L0 SSTable that was compacted at the time the manifest was written. L0 SSTables older than this ID should not be read and are eligible for garbage collection."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"l0"}),": A list of currently available L0 SSTables."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"compacted"}),": A list of sorted runs (SRs) that are currently available to read."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"snapshots"}),": A list of read snapshots. This feature is not yet implemented, but will allow clients to create snapshots. Snapshots will allow writers to have multi-version concurrency control (MVCC) semantics. Readers can use snapshots to ensure they have a consistent view of the state of the database (and that garbage collectors won't delete SSTables that are still being read)."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"compaction",children:"Compaction"}),"\n",(0,n.jsxs)(t.p,{children:["L0 SSTs are written to the ",(0,n.jsx)(t.code,{children:"compacted"})," directory in the object store when ",(0,n.jsx)(t.code,{children:"l0_sst_size_bytes"})," is exceeded. SlateDB's compactor is responsible for merging SSTs from L0 into lower levels (L1, L2, and so on). These lower levels are referred to as ",(0,n.jsx)(t.em,{children:"sorted runs"})," in SlateDB. Each SST in a sorted run contains a distinct subset of the keyspace."]}),"\n",(0,n.jsx)(t.p,{children:"SlateDB's compactor has the following components:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Orchestrator"}),": Runs the compactor's event loop. Calls out to the scheduler to see if there are any compaction tasks to run. Updates the manifest with the results of compaction."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scheduler"}),": Schedules compaction tasks. The scheduler is responsible for determining which SSTs to compact and when to compact them. Though pluggable, the current implementation is a size-tiered compaction strategy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Executor"}),": Executes compaction tasks. The executor is responsible for reading SSTs from the object store, merging them, and writing the results back to the object store."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For more details, see SlateDB's ",(0,n.jsx)(t.a,{href:"https://github.com/slatedb/slatedb/blob/main/docs/0002-compaction.md",children:"compaction design document"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"backpressure",children:"Backpressure"}),"\n",(0,n.jsxs)(t.p,{children:["SlateDB uses a backpressure mechanism to prevent writes from overwhelming the compaction process. If the number of SSTs in L0 exceeds a maximum limit (",(0,n.jsx)(t.code,{children:"l0_max_ssts"}),"), writes to L0 are paused until the compactor can catch up. This cascades upward to the memtable flusher, which will be block writes to its in-memory memtable if ",(0,n.jsx)(t.code,{children:"max_unflushed_memtable"})," is exceeded."]}),"\n",(0,n.jsx)(t.h2,{id:"garbage-collection",children:"Garbage Collection"}),"\n",(0,n.jsx)(t.p,{children:"SlateDB does not currently garbage collect old WAL SSTables, L0 SSTables, or stale SRs. This is a known limitation and will be addressed in future versions of SlateDB."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4068:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/architecture-0693e6671885f6d2c02639b4b3d403a7.png"},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);