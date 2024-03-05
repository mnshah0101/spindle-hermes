import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import Cta from '../components/Cta';
import CardStyle4 from '../components/Card/CardStyle4';
import Papa from 'papaparse';
import { useState, useEffect} from 'react';

export default function ContactPage() {

    const [csvData, setCsvData] = useState([]);
    const [apiName, setApiName] = useState('');
    const [endpointSlug, setEndpointSlug] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    


    useEffect(() => {
        console.log(csvData.length);
    }
    , [csvData]);

    const handleInput = (e) => {
        const { name } = e.target;
        if(name == 'csv' && e.target.files.length > 0) {
            console.log("file uploaded")
            const fileName = e.target.files[0].name;
            document.querySelector('.file-msg').innerText = fileName;

            const file = e.target.files[0];
            Papa.parse(file, {
                header: false,
                complete: (result) => {
                    setCsvData(result.data);
                    console.log(result.data);
                   
                }
            });
        }
        



    }


    


    

  return (
    <>
      <Head>
        <title>
          Deploy - Spindle
        </title>
      </Head>
      <Layout>
        <div className="nk-header" />
        <section className="section section-bottom-0 has-shape has-mask">
          <div className="nk-shape bg-shape-blur-m mt-8 start-50 top-0 translate-middle-x" />
          <div className="nk-mask bg-pattern-dot bg-blend-around mt-n5 mb-10p mh-50vh" />
          <div className="container">
            <div className="section-head">
              <div className="row justify-content-center text-center">
                <div className="col-lg-11 col-xl-10 col-xxl-9">
                  <h6 className="overline-title text-primary">Database Creation</h6>
                  <h1 className="title">
                    Step 1. Upload Your Data
                  </h1>
                   
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row g-gs justify-content-center justify-content-lg-between">
                <div className="col-xl-5 col-lg-6 col-md-8 text-lg-start text-center">
                  <div className="block-text pt-lg-4">
                    <h3 className="title h2 mb-5">Upload A CSV</h3>
                   
                <div className="file-drop-area">
                <span className="fake-btn">Choose file</span>
                <span className="file-msg">or drag and drop files here</span>
                <input className="file-input" type="file" accept=".csv" name="csv"
                  onChange={(e) => {handleInput(e)}}
                
                />
                </div>

                
                       
                  </div>
                  <div className="my-7 rounded-3"style={{ height: '400px', overflow: 'auto'}}>
                  <table  className="preview-table-area" style={{fontSize: '0.5rem'}} >
  <thead>
    <tr>
 
    </tr>
  </thead>
  <tbody>

 {csvData.map((row, index) => (
  <tr className='preview-table-row'>
    <th scope="row">{index}</th>
    {Object.keys(row).map((key) => (
        <td className='preview-table-col '>{row[key]}</td>
    ))}

    
   
  </tr>
))}

  </tbody>
</table>
</div>
                </div>
                <div className="col-lg-6">
                  <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-body">
                      <h3 className="title fw-medium mb-4">
                        Fill In Details About Your Data
                      </h3>
                      <form className="form-submit-init">
                        <div className="row g-4">
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="api-name"
                                  className="form-control form-control-lg"
                                  placeholder="API Name"
                                  required
                                
                                />
                              </div>
                            </div>
                          </div>


                           <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="collection_name"
                                  className="form-control form-control-lg"
                                  placeholder="Collection Name"
                                  required
                                />
                              </div>
                            </div>
                          </div>



                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <input
                                  type="text"
                                  name="api-endpoint"
                                  className="form-control form-control-lg"
                                  placeholder="Endpoint Slug"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                      
                          <div className="col-12">
                            <div className="form-group">
                              <div className="form-control-wrap">
                                <textarea
                                  name="api-description"
                                  className="form-control form-control-lg"
                                  placeholder="Enter a data descrpition"
                                  required
                                  defaultValue={''}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                id="submit-btn"
                              >
                                Send Message
                              </button>
                            </div>
                            <div className="form-result mt-4" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <div className="section-content">
              <div className="row g-gs justify-content-center">
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Documentation"
                    subTitle="Get started with our API by reading our documentation. We have a comprehensive guide to help you get started."
                    actionBtnUrl="/"
                    actionBtnText="Read Docs"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Contact Us"
                    subTitle="If you have any questions or need help, feel free to contact our support team. We are here to help you."
                    actionBtnUrl="/"
                    actionBtnText="Talk to Support"
                  />
                </div>
                <div className="col-md-6 col-xl-4">
                  <CardStyle4
                    title="Request Feature"
                    subTitle="Have an out of the box idea for a new AI feature to add. We are all ears."
                    actionBtnUrl="/"
                    actionBtnText="Request a feature"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-bottom-0">
          <div className="container">
            <Cta
              overlineTitle="Boost your data team's productivity"
              title="Ship high-quality data faster with Spindle."
              subtitle="It’s like having access to a team of data scientists, engineers, and analysts, all in one tool. Start writing for free today."
              btnUrl="/deploy"
              btnText="Start developing for free"
              infoList={[
                'No credit card required',
               
              ]}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
