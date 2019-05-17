docker build ../Demo/NETCore  -t ignatandrei/demodottnettry:2.1 -f dockerDotNetTry.txt
docker docker run -p 127.0.0.1:5000:80/tcp ignatandrei/demodottnettry:2.1