1. lost all notes by forced push wahh!
2. captcha are check on server (we just solve them on frontend and send the token to backend server there token is validated)
3. so ddos attacks can be resolved via captcha
4. WAF can ve used as they can customize the incoming request and block on specific parameters (likee user id, IP, country) (this is custom rate limiting );
5. can use rate limiting via express-rate-limit (still they are on server)
6. ![image](https://github.com/user-attachments/assets/cc16f95b-6185-4736-b795-f684d3662c9d)
7. we need some middle layer to protect the server cause we dont need to flood server with request so this is solved by cloudflare(move domain to cloudflare and just activate proxy rest they handle themselves asthey have been doing this for a longer time now, (probably checks user browser (if its browser request for some script request like typescript )))
8. how authenticator work
9. instead of sending otp to use we use authenticators like google auth
10. otp is generated something like this
11. ![image](https://github.com/user-attachments/assets/874f0f22-20c9-4023-858c-9570bb68c886)
12. otp = userId + Auth_password + time()/30;
13. some constraint from user db in relation with time to actually match the otp on server every time
14. added some batching
15. ![image](https://github.com/user-attachments/assets/096890c8-ac2d-4a59-a454-ea2a22d7a3ec)
16. had problem with undefined cause i didnot await the request to return something 
