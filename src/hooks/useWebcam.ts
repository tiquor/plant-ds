import Webcam from 'react-webcam';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { ls, w } from '../utils/Globals';
import FileContext from '../context/FileContext';
import { useCallback, useContext, useRef, useState } from 'react';
import { webCam as stateWebCam } from '../services/auth.storage';

const useWebcam = () => {
  const webcamRef = useRef<Webcam>(null);
  const [webCam, setWebCam] = useState<boolean>(stateWebCam);
  const { handleImageWebCam } = useContext(FileContext);
  const history = useHistory();
  const width = w.innerWidth;
  const height = w.innerHeight;

  const handleWebCam = () => {
    setWebCam(!webCam);
    ls.setItem('webCam', !webCam + '');
  };

  const handleImage = (url: string) => {
    if (handleImageWebCam) {
      handleImageWebCam(url);
      history.push('/detect');
    }
  };

  const capture = useCallback(() => {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot({
      width: 249,
      height: 249
    });

    if (imageSrc) handleImage(imageSrc);
    else toast.error('Hubo un error con la captura de pantalla');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  return { capture, webCam, handleWebCam, webcamRef, width, height };
};

export default useWebcam;
