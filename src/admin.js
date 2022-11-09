function Admin(){
    return(
        <>
         <Row
      type="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Col>
        <h1>Login</h1>
        <Form autoComplete="off" onFinish={onFinish}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email",
                type: "email",
              },
            ]}
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            label="Password"
            name="password"
          > <Input.Password /></Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
             Login
            </Button>
          </Form.Item>
        </Form>
        
     
      </Col>
    </Row>
        </>
    )
}