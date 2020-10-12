import React from 'react';

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const classes = {
        input: 'border rounded leading-10 w-full m-2'
    }
    return (
      <>
        <button
          className="inline-block w-full p-4 mt-10 text-lg text-center uppercase rounded uch-Button-primary"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Add movement
        </button>
        {showModal ? (
          <>
            <form
              className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
              
            >
              <div className="relative w-auto max-w-3xl mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-4 border-b border-gray-300 border-solid rounded-t">
                    <h3 className="text-xl font-semibold">
                      Add new movement
                    </h3>
                    <button
                      className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative flex-auto p-6">
                    <input className={`${classes.input}`} type="text" name="amount" placeholder="amount"></input>
                    <input className={`${classes.input}`} type="text" name="currency" placeholder="currency"></input>
                    <input className={`${classes.input}`} type="date" name="date" placeholder="date"></input>
                    <input className={`${classes.input}`} type="text" name="category" placeholder="category"></input>
                    <textarea className={`${classes.input}`} name="description" placeholder="description"></textarea>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-gray-300 border-solid rounded-b">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </>
    );
  }
// export default function Modal() {
//     const [showModal, setShowModal] = React.useState(false);
//     render() {
//         return (
//             <button className="w-24 h-24 m-auto text-center text-white rounded-full add-movement" onClick={() => setShowModal(true)}>+</button>

//             <form className="overflow-y-hidden modal-form">
//                 <div>hola</div>
//             </form>
//         )
//     }
// }
