import React from "react";
import { fireEvent, render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
    const sampleTodo = {
        id: addEventListener,
        text: 'TDD 배우기',
        done: false,
    };
    const setup = (props = {}) => {
        const utils = render(<TodoItem todo={sampleTodo} {...props} />);
        const {getByText} = utils;
        const todo = sampleTodo;
        const span = getByText(todo.text);
        const button = getByText('삭제');
        return {
            ...utils,
            span,
            button,
        };
    };

    it('has span and button', () => {
        const {span, button} = setup();
        expect(span).toBeTruthy(); // span 구성요소가 있니
        expect(button).toBeTruthy(); // button 구성 요소가 있니 
    });
    it('show line-through on span when done is true', () => {
        const {span} = setup({todo: {...sampleTodo, done: true} });
        expect(span).toHaveStyle('text-decoration: line-through;');
    });
    it('show line-through on span when done is false', () => {
        const {span} = setup({todo: {...sampleTodo, done: false} });
        expect(span).not.toHaveStyle('text-decoration: line-through;');
    });
 
});