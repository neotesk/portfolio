import ujsx from "ujsx";

import Header from "./icomp/header";
import Hero from "./icomp/hero";
import Section from "./icomp/section";
import SectionPadless from "./icomp/sectionp";
import ImagedLink from "./icomp/imagedlink";
import Image from "./icomp/image";
import Footer from "./icomp/footer";

import { Resource } from "./resource";
import fonts from "./fonts";

for ( const font of fonts ) {
    const rule = new ujsx.CSSOM.CSSFontFaceRule();
    rule.style.fontFamily = font;
    rule.style.src = `url("${ Resource( `font:${ font }` ) }")`;
    ujsx.AddDefinition( rule );
}

new ujsx.StyleRule( {
    content: "''",
    display: "block",
    position: "fixed",
    width: ujsx.Percent(100),
    height: ujsx.Percent(100),
    zIndex: -1,
    backgroundImage: `url(${ Resource( "image:Background" ) })`,
    backgroundPosition: "center",

}, "#app::before" );

const wrap1 = new ujsx.StyleRule( {
    opacity: "0",
    animation: "tran1 .2s var( --bez ) forwards",
    animationDelay: "0.2s"
} );

const wrap2 = new ujsx.StyleRule( {
    opacity: "0",
    animation: "tran1 .2s var( --bez ) forwards",
    animationDelay: "0.3s"
} );

const wrap3 = new ujsx.StyleRule( {
    opacity: "0",
    animation: "tran1 .2s var( --bez ) forwards",
    animationDelay: "0.4s"
} );

const wrap4 = new ujsx.StyleRule( {
    opacity: "0",
    animation: "tran1 .2s var( --bez ) forwards",
    animationDelay: "0.5s"
} );


export default function Page () {
    return (
        <div id="app">
            <Header />
            <Hero />
            <Section text="Ben Kimim?" number="01" styleRule={ wrap1 }>
                Ben <i>Ali</i>, internetteki kimliğimle <i>Neotesk</i> veya kısaca <i>Neo</i> olarak tanınıyorum. <b>2018'den beri</b> profesyonellikle <b>blog, portfolyo ve kurumsal web sayfaları</b> hazırlıyorum. İşime her daim disiplinle yaklaşır, hata olma durumunu en aza indirmemi sağlayan çalışma prensipleriyle ilerlerim. 2015 yılında yazılıma heveslenmiş olup, bu süreçte kendi kendime deneme-yanılma ve internetteki kaynaklar aracılıyla belirli yazılım dillerini öğrendim. <b>Şu anda profesyonel olarak kullandığım diller; Visual Basic .NET, C#, Go, PHP, Javascript ve HTML+CSS dilleridir. İlk öğrendiğim dil ise Visual Basic'dir.</b> Genelde hobi projeleriyle uğraşırım ve <ImagedLink color="#2967ab" href="https://github.com/neotesk/truct" src={ Resource( "image:Truct" ) }>Truct</ImagedLink> bunlardan bir tanesi.
            </Section>
            <Section text="Neler Yaparim?" number="02" styleRule={ wrap2 }>
                Başlangıçtan beri web tarafına ilgim olduğu için genellikle Web uygulamaları ve sayfaları hazırlarım. Elbet ki Masaüstü geliştirme ile Gömülü sistemler ile de ilgileniyorum ancak profesyonellik alanım Web geliştirme ve Web Administering'dir. Web tasarımı konusunda hoşuma giden tasarım şekilleri ise Minimalism ve Brutalism'dir. Bu tasarım şekilleri 2023'te ilgimi çekmiş olup şu an şimdi bile hala ilgimi çekmekte ve bundan ayrı olarak deneysel tasarımlar yapmayı da severim.
            </Section>
            <SectionPadless text="Projelerim" number="03" styleRule={ wrap3 }>
                <Image href="https://github.com/neotesk/truct" src={ Resource( "image:Truct-P" ) } />
                <Image href="https://github.com/neotesk/ujsx" src={ Resource( "image:uJSX-P" ) } />
                <Image href="https://github.com/neotesk/nethop" src={ Resource( "image:Nethop-P" ) } />
            </SectionPadless>
            <Footer styleRule={ wrap4 } />
        </div>
    )
}