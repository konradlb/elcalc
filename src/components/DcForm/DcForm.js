import './DCForm.scss';
import React, { useState, useEffect } from 'react'
let message = "";

export default function DcForm() {
    const [r, setR] = useState(0);
    const [u, setU] = useState(0);
    const [i, setI] = useState(0);
    const [p, setP] = useState(0);

    const calR = ()=>{
        setR(u/i);
        message = `R = U/I = ${u/i}`;
        console.log("calR");
    }
    const calI = ()=>{
        setI(u/r);
        message = `I = U/R = ${u/r}`;
        console.log("calI");
    }
    const calU = ()=>{
        setU(r*i);
        message = `U = I*R = ${i*r}`;
        console.log("calU");
    }
    const calP = () =>{
        setP(u*i);
    }

    useEffect( () =>{
        console.log("useEffect na r");
        console.log(r);
        if(u !== 0){calI()}
        else if (i !== 0){calU()}
        calP();
    }, [r])



    useEffect( () =>{
        console.log("useEffect na u");
        console.log(u);
        if(r !== 0){calI()}
        else if (i !== 0){calR()}
        calP();
    }, [u])



    useEffect( () =>{
        console.log("useEffect na i");
        console.log(i);
        if(r !== 0){calU()}
        else if (u !== 0){calR()}
        calP();
    }, [i])




    return (
        <div>
            <p>{message}</p>
            <form>
                <label htmlFor="r">R:</label>
                <input
                    value={r}
                    onChange={e => setR(e.target.value)}
                    id="r"
                    name="r"
                    type="number"

                />
                <label htmlFor="i">U:</label>
                <input
                    value={u}
                    onChange={e => setU(e.target.value)}
                    id="u"
                    name="u"
                    type="number"

                />
                <label htmlFor="i">I:</label>
                <input
                    value={i}
                    onChange={e => setI(e.target.value)}
                    id="i"
                    name="i"
                    type="number"

                />
                <label htmlFor="p">P:</label>
                <input
                    value={p}
                    onChange={e => setP(e.target.value)}
                    id="p"
                    name="p"
                    type="number"

                />
            </form>
        </div>
    )
}