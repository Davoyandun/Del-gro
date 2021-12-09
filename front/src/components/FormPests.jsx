import React from 'react'

export default function FormPests() {
    return (
        <div>
        <Form>
            <h3> Inserte una Plaga</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la Plaga</Form.Label>
            <Form.Control type="text" placeholder="Ej: Gusano Blanco" />
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagen de la Plaga</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}
