
  ```
  $ git clone
  $ cd shopcube
  ```

- Create a virtualenv named env and activate the [virtual environment](https://docs.python.org/3/tutorial/venv.html):

  Linux/macOS

  ```
  $ python3 -m venv env
  $ . env/bin/activate
  ```

  Windows

  ```
  > py -3 -m venv env
  > env\Scripts\activate
  ```

- Upgrade pip and setuptools:

  ```
  $ python -m pip install --upgrade pip setuptools
  ```

- Install the development dependencies and shopcube requirements:

  ```
  $ python -m pip install -r reqs/dev.txt
  $ pre-commit install
  ```

- Now initialize the app by running:

  ```
  $ python -m pip install -e .
  $ cd src/shopcube
  $ shopyo initialise
  ```

- Run shopcube:

  ```
  $ shopyo rundebug
  ```

- Go to the link http://127.0.0.1:5000/ and you should see the shopcube app running.

- Login as administrator by clicking on the login icon on the top right hand side of the screen.

  Enter admin@domain.com as the username and 'pass' as the pasword.

  After login, you should be directed to http://0.0.0.0:5000/dashboard/.

  ```
  # see config.json
   "admin_user": {
        "email": "admin@domain.com",
        "password": "pass"
    }
  ```
