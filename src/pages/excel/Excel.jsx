import React from 'react';
import Nav from './Nav/Nav';
import './Excel.css';
import './search.fct.js';



const Excel = () => {

    


    return(
        <div>
            <Nav />
            <nav className="table__nav">
            <div className="search">
                <label for="search">Alumnos</label>
                <input type="search" className="light-table-filter" name="search" data-table="order-table" id="search" placeholder=" Buscar por Nombre, Email o Palabra clave..."/>
            </div>
            
            <input type="button" value="+ Añadir alumnos"/>
            </nav>
            <div className='container__excel'>
                <table className="excel order-table table">
                <thead>
                    <tr>
                        <th className="sortable">Nombre <i className="fas fa-sort"></i></th>
                        <th>Ciudad <i className="fas fa-sort"></i></th>
                        <th>País <i className="fas fa-sort"></i></th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico <i className="fas fa-sort"></i></th>
                        <th>Etiquetas <i className="fas fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Álvaro Sánchez Monteaguado</td>
                        <td>Valencia</td>
                        <td>España</td>
                        <td>+34 657 85 25 46</td>
                        <td>smonteagudo@gmail.com</td>
                        <td><span>HTML & CSS</span><span> Angular</span></td>
                    </tr>
                    <tr>
                        <td>Amparo Herrera Climent</td>
                        <td>Sevilla</td>
                        <td>España</td>
                        <td>+34 689 25 48 65</td>
                        <td>hcliment@gmail.com</td>
                        <td><span>HTML & CSS</span><span> Angular</span></td>
                    </tr>
                    <tr>
                        <td>Ana Gutierrez Lozano</td>
                        <td>Valencia</td>
                        <td>España</td>
                        <td>+34 925 65 87 65</td>
                        <td>glonzano@gmail.com</td>
                        <td><span>HTML & CSS</span><span> + 4</span></td>
                    </tr>
                    <tr>
                        <td>Antonio Miguel Lacunza</td>
                        <td>Madrid</td>
                        <td>España</td>
                        <td>+34 658 95 24 56</td>
                        <td>mlacunza@gmail.com</td>
                        <td><span>HTML & CSS</span><span> + 2</span></td>
                    </tr>
                    <tr>
                        <td>Belén Jerez Rivera</td>
                        <td>Barcelona</td>
                        <td>España</td>
                        <td>+34 697 82 95 24</td>
                        <td>jrivera@gmail.com</td>
                        <td><span>HTML & CSS</span><span> Angular</span></td>
                    </tr>
                    <tr>
                        <td>Carla Barroso Soriano</td>
                        <td>Valencia</td>
                        <td>España</td>
                        <td>+34 958 65 41 54</td>
                        <td>bsoriano@gmail.com</td>
                        <td><span>HTML & CSS</span><span> Angular</span></td>
                    </tr>
                    <tr>
                        <td>Carlos Yuste Guerrero</td>
                        <td>Lugo</td>
                        <td>España</td>
                        <td>+34 695 84 62 54</td>
                        <td>yguerrero@gmail.com</td>
                        <td><span>HTML & CSS</span><span> + 3</span></td>
                    </tr>
                    <tr>
                        <td>Carmina Pérez López</td>
                        <td>Valencia</td>
                        <td>España</td>
                        <td>+34 633 33 32 53</td>
                        <td>cperezlo@gmail.com</td>
                        <td><span>HTML & CSS</span><span> + 2</span></td>
                    </tr>
                    

                </tbody>
                
            </table>
            </div>
            
        </div>
    )

    
};

export default Excel;