import { Modal, Button } from 'antd';
import React from 'react'

class AddMovieModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.okclicked(e)
    
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,

    });

  };



  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
        ++Add Movie++
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <h2>Movie Name</h2>
          <input type="text"
          onChange={(e)=>{this.props.getName(e.target.value)}}
          />
          <h2>Movie Year</h2>
          <input type="text" 
          onChange={(e)=>this.props.getYear(e.target.value)}/>
          <h2>Movie Rating</h2>
          <input type="text" 
          onChange={(e)=>this.props.getRating(e.target.value)}/>
          <h2>Movie URL</h2>
          <input type="text" 
          onChange={(e)=>this.props.getUrl(e.target.value)}/>
          
          
        </Modal>
      </div>
    );
  }
}

export default AddMovieModal