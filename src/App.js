import React, { Component } from "react";
import {
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Collapse,
  Breadcrumb,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container
} from "react-bootstrap";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      open : true
    };
  }
  render(){
    const munculPopover = (
       <Popover>
          <Popover.Title as="h3">Informasi website</Popover.Title>
          <Popover.Content>Website ini dibuat untuk memudahkan
            dalam pencarian informasi terkini tentang berita olahraga
          </Popover.Content>
       </Popover>
     )
    return(
      <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Berita</Nav.Link>
          <Nav.Link href="/">Live Score</Nav.Link>
          <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Liga Inggris</NavDropdown.Item>
            <NavDropdown.Item href="/">Piala Presiden Indonesia</NavDropdown.Item>
            <NavDropdown.Item href="/">Bundes Liga</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Transfer Pemain</Nav.Link>
          <Nav.Link href="/">Tim</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active>Transfer Pemain</Breadcrumb.Item>
      </Breadcrumb>

      <Navbar>
        <Navbar.Brand>Rumor Transfer Pemain</Navbar.Brand>
      </Navbar>

      <Tabs>
        <Tab eventKey="semuatransfer" title="Semua Transfer">
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pemain</th>
                <th>Tim</th>
                <th>Transfer</th>
                <th>Proses Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>MAROUANE FELLANI</td>
                <td>MANCHESTER UNITED</td>
                <td>SHANDONG LUNENG</td>
                <td><ProgressBar striped variant="primary" now={85} label="85%"/></td>
              </tr>
              <tr>
                <td>2</td>
                <td>LUIS NANI</td>
                <td>SPORTING CP</td>
                <td>ORLANDO CITY</td>
                <td><ProgressBar striped variant="primary" now={55} label="55%"/></td>
              </tr>
              <tr>
                <td>3</td>
                <td>MAREK HAMSIK</td>
                <td>NAPOLI</td>
                <td>DALIAN YIFANG</td>
                <td><ProgressBar striped variant="primary" now={90} label="90%"/></td>
              </tr>
              <tr>
                <td>4</td>
                <td>SARDAR AZMOUN</td>
                <td>RUBIN KAZAN</td>
                <td>ZENIT ST PETERBURG</td>
                <td><ProgressBar striped variant="primary" now={100} label="100%"/></td>
              </tr>
              <tr>
                <td>5</td>
                <td>MICHY BATSGUAYI</td>
                <td>CHELSEA</td>
                <td>CRYSTAL PALACE</td>
                <td><ProgressBar striped variant="primary" now={50} label="50%"/></td>
              </tr>
              <tr>
                <td>6</td>
                <td>LUCAS PIAZON</td>
                <td>CHELSEA</td>
                <td>CHIEVO</td>
                <td><ProgressBar striped variant="primary" now={100} label="100%"/></td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="ligaprimeringgris" title="Liga Primer Inggris">
          <p>Liga Inggris</p>
        </Tab>
        <Tab eventKey="seriea" title="Serie A">
          <p>Serie A</p>
        </Tab>
        <Tab eventKey="divisiprimer" title="Divisi Primer">
          <p>Divisi Primer</p>
        </Tab>
        <Tab eventKey="bundesliga" title="Bundesliga">
         <p>Bundesliga</p>
        </Tab>
        <Tab eventKey="ligaindonesia" title="Liga 1 Indonesia">
         <p>Liga 1 Indonesia</p>
        </Tab>
      </Tabs>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

      <OverlayTrigger trigger="click" placement="right" overlay={munculPopover}>
        <Button variant="primary">Informasi</Button>
      </OverlayTrigger>

      <Button variant="primary" aria-controls="example-collapse-text" aria-expanded={this.state.open} onClick={()=>this.setState({open :!this.state.open})}>Versi Website</Button>
      <Collapse in={!this.state.open}>
        <div id="example-collapse-text">
          Akses Sport V1.0
        </div>
      </Collapse>
      </Container>
    );
  }
}

export default App;
