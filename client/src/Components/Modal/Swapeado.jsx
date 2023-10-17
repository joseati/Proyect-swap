import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Swapeado = ({handleCloseSwap, showSwapeado}) => {  
  const navigate = useNavigate();
  const handleViewPurchases = () => {
    navigate('/oneUser'); 
  };
  
  return (
    <>
      <Modal show={showSwapeado}>
        <Modal.Header closeButton >
          <Modal.Title>Proceso de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img src="/assets/images/check.svg" alt="imagen de check correcto" /> Enhorabuena! La compra se ha realizado correctamente</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSwap}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleViewPurchases} >
            Ver tus compras
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  
  )
}
