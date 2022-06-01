import React, { useState } from 'react';
import HeroCard from './HeroCard';
import HeroData from './HeroData';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export default function Hero() {
    const [list, setlist] = useState(HeroData)
    const onEnd = (result) => {
        console.log(result)
    }
    return (<>
        <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId="123">
                {(provided, snapshot) => (
                    <div className='hero-main' {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            list.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index} >
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps}
                                            {...provided.dragHandleProps}  >
                                            <HeroCard title={item.title} value={item.value} image={item.img} />
                                            {provided.placeholder}
                                        </div>
                                    )}

                                </Draggable>
                            ))
                        }

                    </div >
                )}
            </Droppable>
        </DragDropContext>
    </>
    )
}
