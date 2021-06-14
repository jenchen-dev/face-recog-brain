import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (Event) => {
        this.setState({name: Event.target.value})
    }

    onEmailChange = (Event) => {
        this.setState({email: Event.target.value})
    }

    onPasswordChange = (Event) => {
        this.setState({password: Event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                } 
                else {
                    alert('Please enter valid information')
                }
            })
    }

    render() {
        return (
            <div>
                <article className='bg-washed-red br3 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center'>
                    <main className='pa4 black-80'>
                        <div className='measure'>
                            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                                <legend className='f2 fw6 ph0 mh0'>Register</legend>
                                <div className='mt3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='name'>Name</label>
                                    <input 
                                        className='b pa1 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100' 
                                        type='text' 
                                        name='name' 
                                        id='name'
                                        onChange={this.onNameChange}
                                    />
                                </div>
                                <div className='mt3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                                    <input 
                                        className='b pa1 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100' 
                                        type='email' 
                                        name='email-address'  
                                        id='email-address'
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className='mv3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                                    <input 
                                        className='b pa1 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100' 
                                        type='password' 
                                        name='password'  
                                        id='password'
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className=''>
                                <input 
                                    onClick={this.onSubmitSignIn}
                                    className='b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' 
                                    type='submit' 
                                    value='Register'
                                />
                            </div>
                        </div>
                    </main>
                </article>
                <div>
                    <h2 className='light-blue hover-navy tc'>Hi there, let's get started!</h2>
                </div>
            </div>
        );
    }
}

export default Register;