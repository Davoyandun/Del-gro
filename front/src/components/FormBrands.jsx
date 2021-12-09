import React from 'react'

export default function FormBrands() {
    return (
        <div>
        <Form>
            <h3> Inserte un Marca</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la Marca</Form.Label>
            <Form.Control type="text" placeholder="Ej: FMC" />
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Logotipo de la Marca</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
}
