import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import '../assets/style.css'
import t1 from '../assets/images/tripsman.png'
import t2 from '../assets/images/t2.jpeg'
import t3 from '../assets/images/t3.jpeg'
import t4 from '../assets/images/t4.jpeg'
import t5 from '../assets/images/t5.jpeg'

const Pageflip = () => {
    const Page = React.forwardRef((props, ref) => {
        return (
            <div className="demoPage" ref={ref}>
                /* ref required */
                <h1>Page Header</h1>
                <p>{props.children}</p>
                <p>Page number: {props.number}</p>
            </div>
        );
    });
  return (
    <div>
    <HTMLFlipBook width={200} height={200}>
        {/* <div className="demoPage"></div>
        <div className="demoPage"><img src={thaj} alt="" style={{width:"200px", height:"200px"}} /></div>
        <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div>
        <div className="demoPage"><img src={ice} alt="" style={{width:"200px", height:"200px"}} /></div>
        <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div> */}
           <Page number="1">Page text</Page>
        <Page number="2">Page text</Page>
        <Page number="3">Page text</Page>
        <Page number="4">Page text</Page>
        
    </HTMLFlipBook>
</div>
  )
}

export default Pageflip

