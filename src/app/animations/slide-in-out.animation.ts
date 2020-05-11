
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    
    trigger('slideInOutAnimation', [

        
        state('*', style({
            
            position: 'fixed',
            zIndex: 2,
            top: 0,
            left: 50,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(255, 255, 255)'
        })),

        
        transition(':enter', [
            style({
                right: '-400%',
            }),
            // animate('.3s')
            animate('.5s ease-in-out', style({
                opacity: 0.2,
    
            })),
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',
                opacity: 0.2,
            }))
        ])

        
    ]);