import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons'

function Downloads() {
  return (
    <div className='container py-5'>

      <h2 className='bold'>Downloads</h2>

      <div className="row">
        <div className="col-md-6 p-4">
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className="col-md-6">
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <h5 className='fw-400'>
                      <FontAwesomeIcon icon={faWindows} className='pe-2' />
                      Windows
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className='small mb-1'>
                    VERSION	1.0.0.2024
                  </p>
                  <p className='small mb-1'>
                    SIZE 930.03 MB
                  </p>
                  <p className='small mb-1'>
                    CHECKSUM SHA-256
                  </p>

                </div>

                <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                  <div className='p-3'>
                    <a href="" className='btn btn-primary rounded-lg w-fit px-4 py-2'>Download</a>
                  </div>
                  <div className='p-3'>
                    <a href="" className='text-decoration-none color-text small'>System Requirements</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-4">
          <div className='card'>
            <div className='card-body'>
              <div className='row'>
                <div className="col-md-6">
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <h5 className='fw-400'>
                      <FontAwesomeIcon icon={faApple} className='pe-2' />
                      MacOS
                    </h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className='small mb-1'>
                    VERSION	1.0.0.2024
                  </p>
                  <p className='small mb-1'>
                    SIZE 930.03 MB
                  </p>
                  <p className='small mb-1'>
                    CHECKSUM SHA-256
                  </p>

                </div>

                <div className='h-100 d-flex justify-content-center align-items-center pt-3'>
                  <div className='p-3'>
                    <a href="" className='btn btn-primary rounded-lg w-fit px-4 py-2'>Download</a>
                  </div>
                  <div className='p-3'>
                    <a href="" className='text-decoration-none color-text small'>System Requirements</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Downloads