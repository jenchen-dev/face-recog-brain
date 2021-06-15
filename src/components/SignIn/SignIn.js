import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (Event) => {
        this.setState({signInEmail: Event.target.value})
    }

    onPasswordChange = (Event) => {
        this.setState({signInPassword: Event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://protected-castle-51424.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                } else {
                    alert('Wrong email or password, please try again!')
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <article className='bg-washed-red br3 ba b--black-10 mv5 w-100 w-50-m w-25-l mw6 shadow-5 center'>
                    <main className='pa4 black-80'>
                        <div className='measure'>
                            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                                <legend className='f2 fw6 ph0 mh0'>Sign In</legend>
                                <div className='mt3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='email-address'>Email</label>
                                    <input 
                                        className='b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100' 
                                        type='email' 
                                        name='email-address'  
                                        id='email-address'
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className='mv3'>
                                    <label className='db fw6 lh-copy f6' htmlFor='password'>Password</label>
                                    <input 
                                        className='b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100' 
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
                                    value='Sign in'
                                />
                            </div>
                            <div className='lh-copy mt3'>
                                <p onClick={() => onRouteChange('register')} className='f6 link dim black db pointer'>Register</p>
                            </div>
                        </div>
                    </main>
                </article>
                <footer class="pv2 ph3 ph5-m ph6-l white">
                    <small class="f6 db tc silver">© 2021<b class="ttu">, created by Jean Chen from ZTM course</b></small>
                    <a class="pv3 ph1 link hover-silver near-black dib mh1 tc" href="https://www.linkedin.com/in/jen-chen-4b512a18b/" title="LinkedIn">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
                        <span class="f6 db">LinkedIn</span>
                    </a>
                    <a class="pv3 ph1 link near-black hover-silver dib mh1 tc" href="https://github.com/jenchen-dev/" title="GitHub">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
                        <span class="f6 db">GitHub</span>
                    </a>
                    <a class="link hover-silver near-black dib mh3 tc" href="https://twitter.com/jc_jourdan" title="Twitter">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
                        <span class="f6 db">Twitter</span>
                    </a>
                </footer>
            </div>
        );
    }
}

export default SignIn;
