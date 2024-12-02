import { Archive, Info, X, XCircleIcon } from "lucide-react";
import ModalWrapper from "./ModalWrapper";
import { StoreContext } from "@/components/store/storeContext";
import React from "react";
import { setError } from "@/components/store/storeAction";

const ModalError = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setError(false));
  };
  return (
    <>
      <div className="modal fixed h-screen w-full top-0 left-0 z-[999999]">
        <div className="backdrop w-full h-full bg-black bg-opacity-90"></div>

        <div
          className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line z-[9999999]"
        >
          <div className="modal-body p-2 py-4 text-center">
            <XCircleIcon className="text-alert mx-auto mb-4" size={40} />
            <h5>Something Went Wrong</h5>
            <p className="my-5 text-center">{store.message}</p>
            <button
              className="btn btn-alert w-full flex justify-center"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalError;
