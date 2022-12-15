import * as passport from "../configs/passport";

describe('Testing passport, authenticate JWT-Token ', ()=>{

    let email = 'test3@JWTtoken.com'

    it('should create one token', ()=>{
        let response = passport.generateToken({email})
        expect(response.length).toBeGreaterThanOrEqual(1);
        expect(response).not.toBe('');
    })
})