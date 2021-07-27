import React from 'react';
import { StyledExtra } from './styles/StyledExtra';

const Extra = () =>(
    <StyledExtra>
        
        <div>
            <h2 style={{marginLeft: '30px'}}>Two Main Rules of React Hooks</h2>
             <ul>
                 <li>
                     <h3>Only Call Hooks at the Top Level</h3>
                     <p>Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of  React function, before any early returns.  This rule ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls</p>
                </li><br />

                <li>
                     <h3>Only Call Hooks from React Functions</h3>
                     <p>Don’t call Hooks from regular JavaScript functions. Instead, call Hooks from React function components or from custom Hooks.This rule ensure that all stateful logic in a component is clearly visible from its source code.</p>
                </li>
             </ul>
        </div>
        <div>
            <h2 style={{marginLeft: '30px'}}>React Hooks best practises</h2>
            <ul>
                <li>
                    <h3>Follow the rules of React Hooks</h3>
                    <p>Dont forget to follow the rules mentioned above</p>
                </li>
                <li>
                    <h3>Use the ESLint plugin for React hooks</h3>
                    <p>React team has also created an ESLint plugin named eslint-plugin-react-hooks to help developers write React Hooks the right way in their projects. This plugin will help to catch and fix hooks errors before someone even try to run their application. This plugin is included by default in Create React App.</p>
                </li>
                <li>
                    <h3>Create function components in the right order</h3>
                    <p>But just like with class components, creating a defined structure for  function components will improve project’s readability.
                        It is recommended to first declare state variables with useState hook, then write the subscriptions with useEffect hook followed by any function relevant to the component’s job.
                        Then finally, return the elements to be rendered by the browser. Enforcing a structure  will keep the flow of code consistent and familiar across many components.
                    </p>
                </li>
                <li>
                    <h3>Use custom hooks for sharing application logic</h3>
                    <p>Repeated application logic will be exteacted in to a custom hook and reuse across many components</p>
                </li>
            </ul>
        </div>
        
    </StyledExtra>

);


export default Extra;