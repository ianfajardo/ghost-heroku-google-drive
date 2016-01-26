// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://japan-blog.herokuapp.com',
        fileStorage: false,
        mail: {},
        database: {
            client: 'postgres',
            connection: {
                host: 'ec2-54-225-195-249.compute-1.amazonaws.com',
                user: 'dwjakdfzzemskv',
                password: '1yBzAInZH9wkb5CPakGLKFSRCT',
                database: 'd38mn8g9r2ths3',
                port: '5432'
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },

        storage: {
          active: 'ghost-google-drive',
          'ghost-google-drive': {
            key: {
                    "private_key_id": "ed7344ff82fdac856948144dd1c93a1650a181af",
                      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDfaMnnNesrUnVm\nn1zD+IV/iwoFANVjPojIMmvlIIP3q2GI/j0hAG4KDSxY4q65L+I6mvmTOZBHSXWe\nVZI2GfIbSLzTDsqu9ZysZAI8N+fkOEUwU0r6P4wvFw/NaAT2By6w1Tik894aVxf5\n4zOSOSZdIGVmRGchoFVD0e0XIzfcWFNsAGbwQxLsXRPyC0hEWOfUzVdQG4xd1XIp\ntJq5nIry5yDEmczDrQ9J+7v93zbJcQTY4DyQohOXy3JOjbm1pqS3jOm4rtqe/YS/\n8kAwCzJOdrTqeFfv5WsLzVhMP1xelS6dkuYtCn58qyjEDA0Rs9LOkmxEDGTENKyc\nwnNt4B0FAgMBAAECggEBAMhIiCEInIClFuzeV2q0pPG3s07S9XpYeIWJdmLeKJDj\nirgmvKSWXxARyT0SU3Nfsx+5CZ9sDqVp/NDqg/6OehbtuaI484mwVTnTGpHjyLc3\nnwd41JHOYJ1ivl72LuRlgf0z2ek/W1Ef3TW/8t7W70azoVPyZManl2kKjNOeVhjp\nRVoABJoy74rlzb0prUcgOngozsTuIEaoidh8khkGpi0HLxZp8LiHJUn1F/Gi6imO\nFPpz/gqWxH1WMMOyiTeiNpndGqUnC5qjCiJLKglGwnzZJGkVG4iSuRCW+wR6OAqP\nfh/qMfcWKbQPPjoIICQicG96+mFXUNxg7ntCJ/X2LIECgYEA85e6SafAgsMhaLD5\nkb6r9LWsN00fK5QxYRCioKApvnHu30vaipXNfokJR0oVETSBdeW9eNmeDYwVrQQQ\nsq3CpRZoxC5nKV8G5EXXVpr6vNfXqZfY52gKfw4bR1lEbuObrEa9VhojuUXKCrM0\n3AuxA38CW6LN+7ynxZpCXyZ4GGUCgYEA6snieIOMTXqUuTcBrS1Br3BrwYJLsjLw\nOXnpfc6Wi2z6LCP0lOYoiEYq5TqSgGbW8kvmu53cv0wKn3C0TJoVE8o9ZQCDwf3f\n4zO51ztqUIZHRE44QgBTsmwHbQqbvwZMhjuXao1zwguzEsrdy9oZx1MIneyuhm7x\noiAmAFk1mCECgYA/jRQy5ysYcmQi9hkGZyJho4wcmWhKbE09r6NeGKsLXpodc6K+\niTqliob7LF62sGYeJiP6hXvwuN1m2CqrEx43B9OpaxnK91nK8FWv6JsF7aH8Qvt5\n0/D5GOsRAD8UVxlkJsh60DMFwSlnBT4DMqGp8dbhpWXsCVoT+ZzbSiQG6QKBgBF3\n682jm/C3yhDtssY7s8Nlzd6b3x3nBFCCbYjasgC1nvdhxXS+mw1oixB7ByNeg2eL\nliMnX6Er+y5ZqFB6tk6+oUq+ew8X4Gx7ELyeww4yr2K5nx3qAFAqEXNfcq8HvPHP\nxTg8RfyN+kjPpyjflUNrPhzh2ypNXtT9J1anTIGBAoGABe4CcBlLJqT0lrAOnxX3\n1tsOND5lYyV9jpa5zb8p/VQAr3kB0vCtRA5bMCoI10xP8BPLluBMyKVaXGRjynVc\nBXxiv9jzP+ZjM5IEwLYefWJ8j/T6jJpZAu3nvmr2j2f6wQsg58U53Q62Zd9XbMgd\nJuXcjvo7NxshPaJoD8iatyU=\n-----END PRIVATE KEY-----\n",
                      "client_email": "japan-blog@ianfajardozx.iam.gserviceaccount.com",
                      "client_id": "117913161292286653704"
                  }
          }
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // ```
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        // ```

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
