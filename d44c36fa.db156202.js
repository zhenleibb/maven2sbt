(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),i=(r(0),r(78)),o={id:"how-to-use",title:"Use maven2sbt as a Library",sidebar_label:"How to Use Library"},s={unversionedId:"library/how-to-use",id:"library/how-to-use",isDocsHomePage:!1,title:"Use maven2sbt as a Library",description:"How to Use",source:"@site/docs/library/how-to-use.md",slug:"/library/how-to-use",permalink:"/docs/library/how-to-use",version:"current",sidebar_label:"How to Use Library",sidebar:"someSidebar",previous:{title:"Get maven2sbt Library",permalink:"/docs/library/get-library"}},b=[{value:"How to Use",id:"how-to-use",children:[{value:"Get immediate result",id:"get-immediate-result",children:[]},{value:"With Cats Effect",id:"with-cats-effect",children:[]}]}],c={rightToc:b};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-to-use"},"How to Use"),Object(i.b)("h3",{id:"get-immediate-result"},"Get immediate result"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import java.io.File\n\nimport maven2sbt.core.Maven2Sbt\nimport maven2sbt.core.ScalaVersion\n\nimport cats._\n\nMaven2Sbt[Id].buildSbtFromPomFile(\n  ScalaVersion("2.13.1"), new File("/path/to/pom.xml")\n)\n// Id[Either[Maven2SbtError, BuildSbt]]\n\n// or\n\nMaven2Sbt[Id].buildSbtFromInputStream(\n  ScalaVersion("2.13.1"), inputStream\n)\n// Id[Either[Maven2SbtError, BuildSbt]]\n')),Object(i.b)("h3",{id:"with-cats-effect"},"With Cats Effect"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import java.io.File\n\nimport maven2sbt.core.Maven2Sbt\nimport maven2sbt.core.ScalaVersion\n\nimport cats.effect._\n\nMaven2Sbt[IO].buildSbtFromPomFile(\n  ScalaVersion("2.13.1"), new File("/path/to/pom.xml")\n)\n// IO[Either[Maven2SbtError, BuildSbt]]\n\n// or\n\nMaven2Sbt[IO].buildSbtFromInputStream(\n  ScalaVersion("2.13.1"), inputStream\n)\n// IO[Either[Maven2SbtError, BuildSbt]]\n')))}l.isMDXComponent=!0}}]);