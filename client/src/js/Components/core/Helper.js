
const helper = {

    getDatefromAtomicDate: function (atomicDT) {
        const atomicDate = (atomicDT + "").replace(/\D/g, "");
          
        return new Date(parseInt(atomicDate.substr(0, 4)), parseInt(atomicDate.substr(4, 2)) - 1, parseInt(atomicDate.substr(6, 2)));
    },

    getAtomicDate: function (dt) {
        if (!dt || !(typeof dt.getMonth === 'function')) return 0;

        return parseInt(dt.getFullYear() + "" + ("0" + (dt.getMonth() + 1)).slice(-2) + "" + ("0" + dt.getDate()).slice(-2));
    },

    displayAtomicDate: function (dt) {
        if (!dt)
            return "";

        var atomicDate = "" + dt;
        if (atomicDate.length < 8)
            return ""

        return atomicDate.substr(6, 2) + "/" + atomicDate.substr(4, 2) + "/" + atomicDate.substr(0, 4);
    },

    displayCEP: function (_v) {
        if (!_v) return "";

        var v = _v + "";

        v = v.replace(/\D/g, "").substr(0, 8);
        v = v.replace(/(\d{5})(\d)/, "$1-$2");

        return v;
    },


    displayMobile: function (value) {
        if (!value) return "";

        var v = value.toString();

        v = "(" + v.replace(/\D/g, "");             //Remove tudo o que não é dígito
        v = v.replace(/(\d{2})(\d)/, "$1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos

        if (v.length > 13)
            v = v.replace(/(\d{5})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        else
            v = v.replace(/(\d{4})(\d)/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        return v;
    },

    displayKilometragem: function (value) {
        if (!value) return "";

        var v = value.toString();

        v = v + " Mil";  
        
        return v;
    },


    displayCNPJ: function (_v) {
        if (!_v) return "";

        var v = _v + "";

        v = v.replace(/\D/g, "").substr(0, 14);

        if (v.length < 6) {
            v = v.replace(/(\d{2})(\d)/, "$1.$2");
        } else if (v.length < 9) {
            v = v.replace(/(\d{2})(\d{3})(\d)/, "$1.$2.$3");
        } else if (v.length < 10) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3/$4");
        } else if (v.length < 11) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3/$4");
        } else if (v.length < 12) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1.$2.$3/$4");
        } else if (v.length < 13) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4");
        } else if (v.length < 14) {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1})/, "$1.$2.$3/$4-$5");
        } else {
            v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }

        //v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
        return v
    },

    displayCPF: function (_v) {
        if (!_v) return "";

        var v = _v + "";

        v = v.replace(/\D/g, "").substr(0, 11);       //Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2");       //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos

        return v
    },

    Post(url, sendData, showLoading, cb) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
            .then((res) => res.json())
            .then((data) => {
                return cb(false, data)
            })
            .catch(function (err) {
                return cb(err)
            });
    },

    Get(url, sendData, showLoading, cb) {
        fetch(url + "?" + new URLSearchParams(sendData))
            .then((res) => res.json())
            .then((data) => {
                return cb(false, data)
            })
            .catch(function (err) {
                return cb(err)
            });
    },



}

export default helper;