# hyper-https-boilerplate

run the program using

node server.js "seed for key"

it will display somethine like

listening wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na

and a few other lines with warnings, use that key like this as a domain:

wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml

you set that up in your site config in the greenlock.d config file, and your email address in the bottom of the file and you're set, just rerun the app!

if configured properly, you'll see an output like this:

```Listening on 0.0.0.0:80 for ACME challenges, and redirecting to HTTPS
Listening on 0.0.0.0:443 for secure traffic
Ready to Serve:
         wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml
[default] renewOffset: -45d
[default] renewStagger: 3d
[default] accountKeyType: EC-P256
[default] serverKeyType: RSA-2048
ACME Directory URL: https://acme-v02.api.letsencrypt.org/directory

By using this software you (johndoe@example.com) are agreeing to the following:
ACME Subscriber Agreement: https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf
Greenlock/ACME.js Terms of Use: https://rootprojects.org/legal/#terms

set greenlockOptions.notify to override the default logger
certificate_order (more info available: account subject altnames challengeTypes)
challenge_select (more info available: altname type dnsHost keyAuthorization)
challenge_status wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml pending
challenge_status wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml pending
challenge_status wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml pending
challenge_status wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml valid
certificate_status wgqalthnpdijvxhojamcidjwwlftsm37rrcqmctwkhd3ao6vy7na.matic.ml valid
cert_issue (more info available: renewAt subject altnames)
```
Your site should be look something like:

![image](https://user-images.githubusercontent.com/657315/164029547-09a2da9c-2a73-477d-82f7-52a95e7d5d29.png)


