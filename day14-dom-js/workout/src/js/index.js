//const regexpFemale = /\d{2}(5[0-9]|6[0-2])(0[1-9]|[12]\d|3[01])\d{4}/;
//const regexpMale =/\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{4}/;

const regexpDay = /(0[1-9]|[12]\d|3[01])/;
const regexpMonthF = /(5[0-9]|6[0-2])/;
const regexpMonthM = /(0[1-9]|1[0-2])/;

const regexpFemale = /\d{2}/ + regexpMonthF + regexpDay + /\d{4}/;
const regexpMale = /\d{2}/ + regexpMonthM + regexpDay + /\d{4}/;



const nidIsValid = (nid) => {
    const intNID = parseInt(nid, 10);

    if ((Number.isNaN(parseInt(nid, 10))) || (nid.length !== 10) || (nid % 11 !== 0)) {
        return false;
    }
   
    //femalethingnotworking
    
    else if (regexpFemale.test(intNID) || regexpMale.test(intNID)){

        const daysInMonth = [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const day = parseInt(nid[4] + nid[5], 10);
        const month = parseInt(nid[2]+nid[3],10);
        const year = parseInt(nid[0]+nid[1],10);

        if(day < 1 || day > daysInMonth[month]){
            return false;
        }

        if(year % 4 !== 0 && month === 2 && day === 29){
            return false;
        }
    }
    return true;
};