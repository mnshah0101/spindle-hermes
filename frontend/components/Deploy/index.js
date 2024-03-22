import Cta from '../Cta';
import CardStyle4 from '../Card/CardStyle4';
import Papa from 'papaparse';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Loader from '../Loader';
import { set } from 'mongoose';
import { useRouter } from 'next/router';



function checkLowerCaseString(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '-' && !/[a-z]/.test(input[i])) {
      return false;
    }
  }
  return true;
}



export default function Deploy() {
  const [csvData, setCsvData] = useState([]);
  const [apiName, setApiName] = useState('');
  const [endpointSlug, setEndpointSlug] = useState('');
  const [dataDescription, setDataDescription] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [user_id, setUser_id] = useState('');
  const [error, setError] = useState('');
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);



  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
    if (session) {
      setUser_id(session.user.id);
    }
  }
    , [session]);


  const handleInput = (e) => {
    const { name } = e.target;
    if (name == 'csv' && e.target.files.length > 0) {
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
    if (name == 'api-name') {
      setApiName(e.target.value);
    }
    if (name == 'api-endpoint') {
     
      setEndpointSlug(e.target.value);
    }

    if (name == 'api-description') {
      console.log(e.target.value);
      setDataDescription(e.target.value);
    }

    if (name == 'api-collection') {
      setCollectionName(e.target.value);
      
    }

  }

  const handleSubmit = async (e) => {
    try {

      setError('');
      e.preventDefault();
      if (csvData.length < 20) {
        setError('The data must have at least 20 rows');
        return;
      }

      if (!checkLowerCaseString(collectionName)) {
        setError('Collection name must be in lowercase and separated by hyphens');
        return;
      }
      if (!checkLowerCaseString(endpointSlug)) {
        setError('Endpoint slug must be in lowercase and separated by hyphens');
        return;
      }
      
 
      const data = { api_name: apiName, endpoint_slug: endpointSlug, description: dataDescription, csvData: csvData, user_id: user_id, collection_name: collectionName };
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/spindle/createDatabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
      if (res.status != 'success') {
        setError(res.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      return router.push('/dashboard');



    } catch (err) {
      setLoading(false);
      console.log(err);
      setError('An error occurred');
    }

  }

  return (
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
                  onChange={(e) => { handleInput(e) }}
                />
              </div>



            </div>
            <div className="my-7 rounded-3" style={{ height: '400px', overflow: 'auto' }}>
              <table className="preview-table-area" style={{ fontSize: '0.5rem' }} >
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
                <form onSubmit={e => handleSubmit(e)} className="form-submit-init">
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-group">
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            name="api-name"
                            className="form-control form-control-lg"
                            placeholder="API Name (e.g. Covid-19 Data)"
                            required
                            onChange={e => handleInput(e)}

                          />
                        </div>
                      </div>
                    </div>


                    <div className="col-12">
                      <div className="form-group">
                        <div className="form-control-wrap">
                          <input
                            type="text"
                            name="api-collection"
                            className="form-control form-control-lg"
                            placeholder="Collection Name (e.g. covid-19-data)"
                            required
                            onChange={e => handleInput(e)}

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
                            placeholder="Endpoint Slug (e.g. covid-19-data)"
                            required
                            onChange={e => handleInput(e)}

                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <div className="form-control-wrap">
                          <input
                            name="api-description"
                            className="form-control form-control-lg"
                            placeholder="Enter a description of the data (This data contains information about...)"
                            required
                            id="api-description"
                            onChange={e => handleInput(e)}

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
                          Deploy API
                        </button>

                        {error && <div className="alert alert-danger mt-3">{error}</div>}
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
      <Loader enabled={loading} />
    </div>

  );
}