
let express=require('express'),
    ursa=require('ursa'),
    bodyParser=require('body-parser'),
    encoding=require('encoding'),
    dbAccess=require('./lib/dbAccess'),
    util=require('util'),
    urlencodedParser=bodyParser.urlencoded({extended:false});

let app=express();
let privatePem,maxBits=512,padding=ursa.RSA_PKCS1_PADDING;
// require pk
app.get('/pk',(req,rep)=>{
  keyPair=ursa.generatePrivateKey(maxBits,65537);
  privatePem=ursa.createPrivateKey(keyPair.toPrivatePem());
  let key=keyPair.toPublicPem('utf8');
  rep.end(JSON.stringify({key:key}));
});
// check account & password
app.post('/validate',urlencodedParser,(req,rep)=>{
  let account=decrypt(req.body.cipher_ac,privatePem,maxBits/8,padding),
      password=decrypt(req.body.cipher_pw,privatePem,maxBits/8,padding);
  // match database
  dbAccess.execute('select password from Member where account="'+account+'"',(err,rows)=>{
    if(err) rep.end(JSON.stringify({statuscode:203,description:util.inspect(err)}));
    else if(rows.length==0) rep.end(JSON.stringify({statuscode:201,description:'account not exists'}))
    else if(rows[0].password==password) rep.end(JSON.stringify({statuscode:200}));
    else rep.end(JSON.stringify({statuscode:202,description:'incorrect password'}));
  });
});

module.exports=app;

//用于获取内容的字节数
function bytes(text, coding) {
    if (typeof text === 'undefined') {
        throw new Error("must have a arg.");
    }
    coding = coding || 'utf8';
    return Buffer.byteLength(text.toString(), coding);
}
function encrypt(plain, publicKey, realBit, padding){
    var start1 = 0;
    var end1   = realBit;
    var result1 = '';
    var originBuff = new Buffer(plain);
    var originByte = bytes(plain, 'utf8');
    while(start1 < originByte){
        var originTmp  = originBuff.slice(start1, end1);
        result1 += publicKey.encrypt(originTmp, 'binary', 'binary', padding);
        start1 += realBit;
        end1 += realBit;
    }

    var encrypted =  encoding.convert(result1, 'binary', 'base64');

    return encrypted.toString();
}
function decrypt(cipher, privateKey, maxBit, padding){
    var start = 0;
    var end   = maxBit;
    var result = '';
    var cipherBuff = encoding.convert(cipher, 'base64', 'binary');   //这个地方很关键，直接使用new Buffer(cipher, 'base64') 报编码错误
    var cipherByte = bytes(cipher, 'base64');
    while(start < cipherByte){
        var cipherTmp  = cipherBuff.slice(start, end);    //请注意slice函数的用法
        result += privateKey.decrypt(cipherTmp, 'binary', 'binary', padding); //先保存成二进制，待完成解密后再转换成字符串
        start += maxBit;
        end += maxBit;
    }

    var decrypted =  encoding.convert(result, 'binary', 'utf8');
    return decrypted.toString();
}
