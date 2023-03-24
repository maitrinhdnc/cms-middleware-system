# cms-middleware

## 1. Run pocketbase server
```bash
cd pocketbase-server
go build
pocketbase.exe serve
```

test account:
```
username: maitrinhdnc@gmail.com
pwd: 0123456789
```

## 2. Run middleware
```bash
cd middleware
```

If you dont have env folder yet, make it as below command
```bash
python -m venv venv
```

Activate python env
```bash
venv/Scripts/activate # windows
```

Install all libs related to this scripts
```bash
pip install -r requirements.txt
```

Run app
```bash
python app.py
```