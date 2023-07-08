import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Animation from './animations';
import CurList from './current_urls';

export default function RenderForm(){
  const [result,setResult]=useState(-1);
  const [status,setStatus]=useState('');
  const [show,setShow]=useState(true);
  const [currentUrls,setCurrentUrls]=useState([]);


  function handleSubmit(e){
    setStatus('u');
    e.preventDefault();
    const url=document.getElementById('url').value;
    fetch('http://127.0.0.1:3790/get-values?url='+encodeURIComponent(url))
    .then(response => 
      response.json()
      )
    .then(data => {
      setResult(data.result);
      setStatus('true');
      setShow(true);
      setCurrentUrls([...currentUrls,{url:url,predict:data.result}]);
      console.log(data.result);
    })
    .catch(error => {
      setResult('');
      console.log(error);
      setStatus('false');
    });
  }
  return(
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 p-1'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                {/* {status==='true' ? 
                  <Alert className='fixed-top' show={show} variant={(result===-1 || result===1) ? 'danger' : 'success'} onClose={() =>setShow(false)} dismissible>
                    <Alert.Heading>{ status==='true' ? result===1 ? 'Unsafe Website' : 'Safe Website' : status!=='Server Error'}</Alert.Heading>
                      {result===1 ? "Unsafe" : "Safe"}
                  </Alert>
                  : status==='' ? 'Enter a URL to check' : 'Server error'} */}
              </div>
          </div>
          <div className='row text-center'>
          <div className='col-md-2'>
              
          </div>
            <div className='col-md-8 h-3'>
                <Animation animation={status==='u' ? 'loading_animation' : result===1 ? 'phishing_animation' : result===0 ? 'safe_animation' : result===-1 ? 'url_animation' : 'error_animation'}/>
            </div>

          </div>
        </div>
        <div className="col-md-4 m-3 mt-5 ">
          <Form onSubmit={
            (e)=>{
              handleSubmit(e);
            }}>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col md={12}>
                  <Form.Label htmlFor='url'>Enter Url</Form.Label></Col>
                <Col md={12}><Form.Control className='urlInput' id='url' type="text" placeholder="https://example.com" /></Col>
              </Row>
            </Form.Group>
            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Col md={12}><Form.Control className='urlSubmit' type="submit"/></Col>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
    </div>
    <CurList urls={currentUrls} />
    </>
  )
};
  // async function executeModel(values){
  //   const sess=await InferenceSession.create('./model.onnx',{ executionProviders: ['WSAM']});
  //   // await(sess.loadModel('./model.onnx'));
  //   const res=sess.run(values, ['num_detection:0', 'detection_classes:0'])
  //   console.log(res);
  //   sess.dispose()
  // }
// executeModel([[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]])
// import { InferenceSession } from 'onnxruntime-web';


