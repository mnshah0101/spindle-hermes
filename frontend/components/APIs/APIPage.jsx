import React from 'react';
import StickyMenu from './StickyMenu';
import APIContent from './APIContent';

export default function APIPage(){
    return (
        <div className='container' style={{height:'100%'}}>
            <div className="row" style={{height:'100%'}}>

                <div className="col-lg-2 mb-3" >
                    <StickyMenu  / >

                    </div>

                <div className="col-lg-10 mb-3">
                    <APIContent />
                    </div>


            </div>
        </div>

    );
}