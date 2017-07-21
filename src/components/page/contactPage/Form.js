import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Form extends Component {

  constructor(){
    super();

    this.state = {
      selectStatus: 'default'
    }
  }

  changeSelect = (e) => {
    const string = e.target.value;
    if (string.includes('Ask')) {
      this.setState({
        selectStatus: 'default'
      });
    } else {
      this.setState({
        selectStatus: ''
      });
    }
  };

  render() {
    const page = this.props.page;
    return (
        <div className="form-section">
          <form action="https://submit.jotformeu.com/submit/71981737208363/">
            <input type="hidden" name="formID" value="71981737208363"/>
            <input type="hidden" id="simple_spc" name="simple_spc" value="71981737208363"/>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row1_title}</h3>
                  <p className="row__text">{page.row1_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <div className="half-block">
                    <label className="capitalized">First name</label>
                    <input type="text" id="first_3" name="q3_name[first]" className="form-textbox" size="10" placeholder="George"/>
                  </div>
                  <div className="half-block second">
                    <label className="capitalized">Last name</label>
                    <input type="text" id="last_3" name="q3_name[last]" className="form-textbox" size="15" placeholder="Washington"/>
                  </div>
                  <label className="capitalized">Email Address</label>
                  <input type="email" id="input_4" name="q4_email" className="form-textbox" size="30" placeholder="thefirst@foundingfathers.com"/>
                  <input type="checkbox" className="form-checkbox" id="input_5_0"  name="q5_getEmail[]"/>
                  <label htmlFor="input_5_0" className="css-label">
                  </label>
                  <span className="checkbox-label">Get email updates about new products</span>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid">
                <div className="grid__item medium-up--one-half small--full-width">
                  <h3 className="row__title">{page.row2_title}</h3>
                  <p className="row__text">{page.row2_text}</p>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <label>Choose a subject</label>
                  <select className={`form-dropdown ${this.state.selectStatus}`} id="input_7" name="q7_subject" onChange={this.changeSelect}>
                    <option value="Ask a Question"> Ask a Question</option>
                    <option value="Change shipping address"> Change shipping address</option>
                    <option value="Change order"> Change order</option>
                    <option value="Request a product"> Request a product</option>
                    <option value="Other (please explain)"> Other (please explain)</option>
                  </select>
                  <label>Write your message</label>
                  <textarea id="input_6" className="form-textarea" name="q6_message" cols="40" rows="6" placeholder="Four score and seven years ago..."/>
                </div>
              </div>
            </div>
            <div className="form-section__row">
              <div className="grid grid--no-gutters grid--table">
                <div className="grid__item medium-up--one-half small--full-width">
                  <div className="policy-urls">
                    <Link to={page.return_policy.url} className="return-policy">{page.return_policy.title}</Link>
                    <span className="divider">|</span>
                    <Link to={page.shipping_policy.url} className="shipping-policy">{page.shipping_policy.title}</Link>
                  </div>
                </div>
                <div className="grid__item medium-up--one-half small--full-width">
                  <button id="input_2" type="submit" className="form-submit-button">Send message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}