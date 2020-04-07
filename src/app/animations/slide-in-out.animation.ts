// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            top: 0,
            left: 50,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(255, 255, 255)'
        })),

        // route 'enter' transition
        transition(':enter', [
            animate('.3s')
        ]),

        
    ]);