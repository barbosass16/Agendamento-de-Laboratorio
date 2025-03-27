import React, { useState } from "react";
import moment  from 'moment';
import {Calendar,momentLocalizer}  from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import '../style/calendario.css'
import MenuDrop from "./header";
import Eventos from "./eventos";
const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment)

const BigCalendar = ()=>{

    const [eventoSelecionado, SeteventoSelecionado] = useState(null)//selecionar eventos


    const [eventos, setEventos] = useState(Eventos)
     const onEventDrop = (data) => {
        const {start, end} = data;
        const opdatedEvents = eventos.map((event) =>{
            if( event.id === data.event.id){
                return{
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })
        setEventos (opdatedEvents)
     }
     //Final da função de arrastar
     const onEventResize = (data) =>{
        const {start, end} = data;
        const opdatedEvents = eventos.map((event) =>{
            if( event.id === data.event.id){
                return{
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                }
            }
            return event;
        })
        setEventos (opdatedEvents)
     }//Final da função de arrastar
    
     const hamdleEventClick = (evento) =>{
        SeteventoSelecionado(eventos)
     }
     const hamdleEventClose = () =>{
        SeteventoSelecionado(null)
     }


    return(
        <div className="calendar-conteiner">
        <MenuDrop/>
         <DragAndDropCalendar
         defaultDate={moment().toDate()}
         defaultView="month"
         events={Eventos}
         localizer={localizer}
         resizable
         onEventDrop={onEventDrop}
         onEventResize={onEventResize}
         className="calendar"
         onSelectEvent={hamdleEventClick}
         
         />
         
        </div>
    )
}
export default BigCalendar