"use strict";(self.webpackChunkslatedb_website=self.webpackChunkslatedb_website||[]).push([[70],{2453:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var s=o(4848),a=o(8453);const i={sidebar_position:5},r="FAQ",n={id:"faq",title:"FAQ",description:"Is SlateDB for OLTP or OLAP?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/slatedb/slatedb-website/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"}},l={},d=[{value:"Is SlateDB for OLTP or OLAP?",id:"is-slatedb-for-oltp-or-olap",level:2},{value:"Can&#39;t I use S3 as a key-value store?",id:"cant-i-use-s3-as-a-key-value-store",level:2},{value:"Why does SlateDB have a write-ahead log?",id:"why-does-slatedb-have-a-write-ahead-log",level:2},{value:"How is this different from RocksDB-cloud?",id:"how-is-this-different-from-rocksdb-cloud",level:2},{value:"How is this different from RocksDB on EBS?",id:"how-is-this-different-from-rocksdb-on-ebs",level:2},{value:"How is this different from RocksDB on EFS?",id:"how-is-this-different-from-rocksdb-on-efs",level:2},{value:"How is this different from DynamoDB?",id:"how-is-this-different-from-dynamodb",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(t.h2,{id:"is-slatedb-for-oltp-or-olap",children:"Is SlateDB for OLTP or OLAP?"}),"\n",(0,s.jsxs)(t.p,{children:["SlateDB is designed for key/value (KV) online transaction processing (OLTP) workloads. It is optimized for lowish-latency, high-throughput writes. It is not optimized for analytical queries that scan large amounts of columnar data. For online analytical processing (OLAP) workloads, we recommend checking out ",(0,s.jsx)(t.a,{href:"https://github.com/tonbo-io/tonbo",children:"Tonbo"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"cant-i-use-s3-as-a-key-value-store",children:"Can't I use S3 as a key-value store?"}),"\n",(0,s.jsx)(t.p,{children:"You can definitely use S3 as a key-value store. An object path would represent a key and the object its value. But then you pay one PUT per write, which gets expensive."}),"\n",(0,s.jsxs)(t.p,{children:["To make writes cheaper, you will probably want to batch writes (write multiple key-value pairs in a single ",(0,s.jsx)(t.code,{children:"PUT"})," call). Batched key-value pairs need to be encoded/decoded, and a sorted strings table (SST) is a natural fit. Once you have SSTs, a log-structured merge-tree (LSM) is a natural fit."]}),"\n",(0,s.jsx)(t.h2,{id:"why-does-slatedb-have-a-write-ahead-log",children:"Why does SlateDB have a write-ahead log?"}),"\n",(0,s.jsx)(t.p,{children:"Some developers have asked why SlateDB needs a write-ahead log (WAL) if we're batching writes. Couldn't we just write the batches directly to L0 as an SST?"}),"\n",(0,s.jsx)(t.p,{children:"We opted to have the WAL separate from the L0 SST so that we could frequently write SSTs without increasing the number of L0 SSTs we have. Since reads are served from L0 SSTs, having too many of them would result in a very large amount of metadata that needs to be managed in memory. By contrast, we don't serve reads from the durable WAL, we only use it for recovery."}),"\n",(0,s.jsx)(t.p,{children:"A separate WAL lets SlateDB frequently flush writes to object storage (to reduce durable write latency) without having to worry about the number of L0 SSTs we have."}),"\n",(0,s.jsx)(t.h2,{id:"how-is-this-different-from-rocksdb-cloud",children:"How is this different from RocksDB-cloud?"}),"\n",(0,s.jsx)(t.p,{children:"RocksDB-cloud does not write its write-ahead log (WAL) to object storage. Instead, it supports either local disk, Kafka, or Kinesis for the WAL. Users must decide whether they want to increase operation complexity by adding a distributed system like Kafka or Kinesis to their stack, whether they want to use local disk for the WAL, or whether they want to use EBS or EFS for the WAL."}),"\n",(0,s.jsx)(t.p,{children:"SlateDB, by contrast, writes everything (including the WAL) to object storage. This offers a simpler architecture, better durability, and potentially better availability at the cost of increased write latency (compared to local)."}),"\n",(0,s.jsx)(t.p,{children:"RocksDB-cloud also does not cache writes, so recently written data must be read from object storage even if reads occur immediately after writes. SlateDB, by contrast, caches recent writes in memory. Eventually, we will also add on-disk caching as well."}),"\n",(0,s.jsx)(t.p,{children:"Finally, it's unclear how open RocksDB-cloud is to outside contributors. The code is available, but there is very little documentation or community."}),"\n",(0,s.jsx)(t.h2,{id:"how-is-this-different-from-rocksdb-on-ebs",children:"How is this different from RocksDB on EBS?"}),"\n",(0,s.jsx)(t.p,{children:"Amazon Web Services (AWS) elastic block storage (EBS) runs in a single availability zone (AZ). To get SlateDB's durability and availability (when run on S3 standard buckets), you would need to replicate the across three AZs. This complicates the main write path (you would need synchronous replication) and add to cost."}),"\n",(0,s.jsx)(t.p,{children:"S3 is inherently much more flexible and elastic. You don't need to overprovision, you don't need to manage volume sizes, and you don't have to worry about transient space amplification from compaction."}),"\n",(0,s.jsxs)(t.p,{children:["S3 also allows for more cost/perf/availability tradeoffs. For example, users can sacrifice some availability by running one node in front of S3 and replacing it on a failure. ",(0,s.jsx)(t.a,{href:"https://materializedview.io/p/cloud-storage-triad-latency-cost-durability",children:"The Cloud Storage Triad: Latency, Cost, Durability"})," talks more about these tradeoffs."]}),"\n",(0,s.jsx)(t.h2,{id:"how-is-this-different-from-rocksdb-on-efs",children:"How is this different from RocksDB on EFS?"}),"\n",(0,s.jsxs)(t.p,{children:["Amazon Web Services (AWS) elastic file system (EFS) is very expensive ($0.30/GB-month for storage, $0.03/GB for reads, and $0.06/GB for writes). It's also unclear how well RocksDB works with network file system (NFS) mounted filesystems, and whether ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/efs/latest/ug/features.html#consistency",children:"close-to-open consistency"})," breaks any internal assumptions in RocksDB."]}),"\n",(0,s.jsx)(t.h2,{id:"how-is-this-different-from-dynamodb",children:"How is this different from DynamoDB?"}),"\n",(0,s.jsx)(t.p,{children:"DynamoDB has a different cost structure and API than SlateDB. In general, SlateDB will be cheaper. DynamoDB charges $0.1/GiB for storage. If you use S3 standard with SlateDB, storage starts at $0.023/GiB (nearly 5 times cheaper)."}),"\n",(0,s.jsxs)(t.p,{children:["S3 standard charges $0.005 per-1000 writes (PUT, DELETE, etc.) and $0.0004 per-1000 reads. DynamoDB charges in read and write request units (RRU and WRU, respectively). Writes cost $1.25 per-million write units and $0.25 per0million read units. Depending on consistency and data size, a single request can cost multiple units (see ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/dynamodb/pricing/on-demand/",children:"here"})," for details). SlateDB batches writes by default, so it's usually going to have a less expensive API bill. If you batch DyanmoDB writes, you might be able to get similar fees."]}),"\n",(0,s.jsx)(t.p,{children:"DynamoDB offers 99.999% SLA while an S3 standard bucket offers 99.99%, so DynamoDB is more available."}),"\n",(0,s.jsx)(t.p,{children:"DynamoDB also requires partitioning. SlateDB doesn't have partitioning. Instead, you must build a partitioning schemeon top of SlateDB if you need it. Though, since SlateDB fences stale writers, partitionin management should be fairly straightforward."}),"\n",(0,s.jsx)(t.p,{children:"SlateDB also offers some unique features like the ability to create snapshot clones of a database at a specific point in time."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>n});var s=o(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);