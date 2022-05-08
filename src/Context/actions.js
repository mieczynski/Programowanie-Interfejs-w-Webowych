
export async function loginUser(dispatch, loginPayload, loginData) {

    let checkData = false;
    let data;

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        loginData.map((i) => {
            if(loginPayload.email === i.email)
                if(loginPayload.password===i.password){
                                checkData = true;
                                data = loginPayload;
                            }
              }
            )

        if(checkData){
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }
        dispatch({ type: 'LOGIN_ERROR', error: "Invalid data" });
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}
