
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    
    trigger('slideInOutAnimation', [

        
        state('*', style({
            
            position: 'fixed',
            top: 0,
            left: 50,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(255, 255, 255)'
        })),

        
        transition(':enter', [
            animate('.3s')
        ]),

        
    ]);