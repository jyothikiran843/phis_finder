import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CurList({urls}){
    const [showUrls,setShowUrls]=useState(false);
    console.log(urls)
    function append(url){
        fetch('http://127.0.0.1:3790/submit-url?url='+encodeURIComponent(url))
        .then(response => 
        response.json()
        )
        .then(data => {
        // console.log(data);
        })
        .catch(error => {
        // console.log(error);
        });
    }
    return(
        <>
            <Button onClick={()=>setShowUrls(!showUrls)}>Checked Urls</Button>
            {showUrls && 
                <ListGroup>
                {
                    urls.map((url,ind) => {
                        console.log(url);
                        return <ListGroup.Item variant={url.result===1 ? 'danger' : 'success'} key={ind}>{url.url} <Button className='mr-5' onClick={()=>append(url.url)}>Submit url</Button></ListGroup.Item>
                    })
                }
                </ListGroup>
            }
        </>
    );
}