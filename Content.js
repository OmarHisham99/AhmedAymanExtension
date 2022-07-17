const ahmedAymanImgs = ["https://drive.google.com/uc?id=1VLbYi4xZm_st-PMIIXhOXaKJbGvPH28u",
                        "https://drive.google.com/uc?id=1Stvmgi_anlBpk1GZb0NkjNLuyRy2K8BC",
                        "https://drive.google.com/uc?id=1RBKQC9Y7HnaE1JRMj30_QHSt4q37xyLT",
                        "https://drive.google.com/uc?id=1X9DpJ-22ytnr7Uv-R9d7hGg5n2-zZs5w",
                        "https://drive.google.com/uc?id=1-nB9tzw5rs-EgTGDD6SyQmpUhDrlCmaI",
                        "https://drive.google.com/uc?eid=1OJI6-z02RGc1IzNUX1FKrUAcOLCwjVey",
                        "https://drive.google.com/uc?id=1-aCV5ee0m58IW5JIdeS3zSZ5djYBPtFP",
                        "https://drive.google.com/uc?id=1N-zUvTA8i0faWCWcnKXAHEv3rY4uUxr4"]; 


let imgs = document.getElementsByTagName("img");  

for(let i = 0; i < imgs.length;i++){
    imgs[i].src = ahmedAymanImgs[Math.floor(Math.random()*ahmedAymanImgs.length)];
}

