import React from 'react'

const Model = ({ children, heading, value }) => {

    // console.log('Modal Inputs', value);
    const submitModalData = (e) =>{
        e.preventDefault();
        localStorage.setItem('user1', JSON.stringify(value))
        let data = localStorage.getItem('user1');
        let result = JSON.parse(data);
        console.log(result);
    }

    
    return (
        <>
            <button
                type="button"
                className="btn bg-teal-400 add-button fs-11 shadow"
                data-toggle="modal"
                data-target="#modal_form_vertical"
            >
                <i className="fa fa-plus pr-1" aria-hidden="true"></i>
                Create New
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="modal_form_vertical">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {heading}
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="POST" action="" onSubmit={submitModalData}>
                            <div className="modal-body">
                                {/* modal body */}
                                {children}
                                {/* /modal body */}
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Model