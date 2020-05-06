import './DCForm.scss';
import React, { useState, useEffect } from 'react'
let message = "";
let calculateFlag = false ;

//formDc[`${name}`] = value;

export default function DcForm() {

    //const [changedName, setChangedName] = useState("")

    const [formDc, setFormDc] = useState({
        r: 0,
        u: 0,
        i: 0,
        p: 0
    })

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = parseFloat(e.target.value);
        setFormDc(prev =>({...prev, [name]: value}));
        calculateFlag = true;

    }


    const multiplicate = (a, b, name) =>{
        const res = (a*b);
        //console.log("mnożenie:"+res);
        setFormDc(prev =>({...prev, [name]: res}));
    }
    const divide = (a, b, name) =>{
        const res = (a/b);
        //console.log("dzielenie:"+res);
        setFormDc(prev =>({...prev, [name]: res}));
    }
    const sqrt = (a, name) =>{
        const res = Math.sqrt(a);
        //console.log("pierwiastek:"+res);
        setFormDc(prev =>({...prev, [name]: res}));
    }


    const calculateI = () => {
        divide(formDc.u, formDc.r, "i");
        console.log("calculateI");
    }
    const calculateR = () => {
        divide(formDc.u, formDc.i, "r");
        console.log("calculateR");
    }
    const calculateU = () => {
        multiplicate(formDc.r, formDc.i, "u");
        console.log("calculateU");
    }
    const calculateP = () => {
        multiplicate(formDc.u, formDc.i, "p");
        console.log("calculateP");
    }
    const calculatePFromRI = () => {
        multiplicate(formDc.r, (formDc.i * formDc.i), "p");
        console.log("calculatePfromRI");
    }
    const calculatePFromUR = () => {
        divide((formDc.u * formDc.u), formDc.r, "p");
        console.log("calculatePfromUR");
    }
    const calculateRFromUP = () => {
        divide((formDc.u * formDc.u), formDc.p, "r");
        console.log("calculateRfromUP");
    }
    const calculateIFromUP = () => {
        divide(formDc.p, formDc.u, "i");
        console.log("calculateIfromUP");
    }
    const calculateUFromRP = () => {
        sqrt((formDc.r * formDc.p), "u");
        console.log("calculateUfromRP");
    }
    const calculateIFromRP = () => {
        sqrt( (formDc.p/formDc.r), "i");
        console.log("calculateIfromRP");
    }
    const calculateRFromIP = () => {
        divide( formDc.p, (formDc.i*formDc.i), "r");
        console.log("calculateRfromIP");
    }
    const calculateUFromIP = () => {
        divide( formDc.p, formDc.i, "u");
        console.log("calculateUfromIP");
    }

    console.log("------------------------");




        //zdarzenie na zmiane R
    useEffect( () =>{
        if(calculateFlag){
            calculateFlag = false

            console.log("useEffect na r, R: " + formDc.r + ' \u03A9');
            if (    (formDc.u === 0) && (formDc.i === 0) && (formDc.p === 0)   ) {}
            else if (   (formDc.u === 0) && (formDc.i !== 0)    ) {calculateU()}
            else if (   formDc.i !==0   ) { calculateI() }
            else if (   (formDc.u === 0)  && (formDc.i === 0)    ){
                calculateUFromRP();
                calculateIFromRP();
            }

            if ((formDc.u !== 0) && (formDc.i !== 0)) {
                calculatePFromUR();
                console.log("U:" + formDc.u);
                console.log("I:" + formDc.i);
            }
            else if (   (formDc.r !== 0) && (formDc.i !== 0)  && (formDc.u === 0)  ){calculatePFromRI()}
            else if (   (formDc.r !== 0) && (formDc.u !== 0)  && (formDc.i === 0)  ){calculatePFromUR()}

        }
    }, [formDc.r])


        //zdarzenie na zmianę U
    useEffect( () =>{
        if(calculateFlag) {
            calculateFlag = false;

            console.log("useEffect na u, U:" + formDc.u + "V");

            if (    (formDc.r === 0) && (formDc.i === 0) && (formDc.p === 0)    ) {}
            else if (formDc.r !== 0) { calculateI() }
            else if (   (formDc.i !== 0)  && (formDc.r === 0)   ) { calculateR() }
            else if (   (formDc.i === 0)  && (formDc.r === 0)   ) {
                calculateRFromUP();
                calculateIFromUP();
            }

            if (    (formDc.u !== 0) && (formDc.r !== 0)    ) {calculatePFromUR();}
            else if (   (formDc.i !== 0) && (formDc.u !== 0)    ) {calculateP()}

        }
    }, [formDc.u])


        //zdarzenie na zmianę I
    useEffect( () =>{
        if(calculateFlag) {
            calculateFlag = false;

            console.log("useEffect na i, I: " + formDc.i + "A");

            if (    (formDc.r === 0) && (formDc.u === 0) && (formDc.p === 0)    ) {console.log("rob nic");}
            else if (formDc.r !== 0) {calculateU()}
            else if (   (formDc.i !== 0) && (formDc.u !==0) ) {calculateR()}
            else if (   (formDc.p !== 0) && (formDc.r === 0) && (formDc.u === 0)   ) {
                calculateUFromIP();
                calculateRFromIP();
            }

            if ((formDc.i !== 0) && (formDc.r !== 0)) {calculatePFromRI()}
            else if ((formDc.i !== 0) && (formDc.u !== 0)) {calculateP()}
        }
        }, [formDc.i])


    //zdarzenie na zmianę P
    useEffect( () =>{
        if(calculateFlag) {
            calculateFlag = false;

            console.log("useEffect na p, P: " + formDc.p + "W");

            if ((formDc.r === 0) && (formDc.u === 0) && (formDc.i === 0)) {}
            else if ((formDc.i !== 0) && (formDc.r === 0) && (formDc.u === 0)) {
                calculateUFromIP();
                calculateRFromIP();
            }
            else if ((formDc.u !== 0) && (formDc.r === 0) && (formDc.i === 0)) {
                calculateIFromUP();
                calculateRFromUP();
            }
            else if ((formDc.r !== 0) ) {
                calculateUFromRP();
                calculateIFromRP();
            }


        }
    }, [formDc.p])




    return (
        <div>
            <p>{message}</p>
            <form>
                <label htmlFor="r">R:</label>
                <input
                    value={formDc.r}
                    onChange={handleChange}
                    id="r"
                    name="r"
                    type="number"

                />
                <label htmlFor="i">U:</label>
                <input
                    value={formDc.u}
                    onChange={handleChange}
                    id="u"
                    name="u"
                    type="number"

                />
                <label htmlFor="i">I:</label>
                <input
                    value={formDc.i}
                    onChange={handleChange}
                    id="i"
                    name="i"
                    type="number"

                />
                <label htmlFor="p">P:</label>
                <input
                    value={formDc.p}
                    onChange={handleChange}
                    id="p"
                    name="p"
                    type="number"

                />
            </form>
        </div>
    )
}