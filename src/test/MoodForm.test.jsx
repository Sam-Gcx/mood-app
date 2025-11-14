import {render,screen, fireEvent} from '@testing-library/react';
import MoodForm from '../components/MoodForm';

it('calls onAddmode with selected mood and date on submit', ()=>{
    const handleAddMood =jest.fn();
    render(<MoodForm onAddMood={handleAddMood}/>);

    const select = screen.getByRole('combobox');
    const button = screen.getByRole('button', {name: /add/i});
    fireEvent.change(select, {target:{value:'Happy'}});
    fireEvent.click(button);
    expect(handleAddMood).toHaveBeenCalledTimes(1);
    const calledArg = handleAddMood.mock.calls[0][0];
    expect(calledArg).toMatchObject({mood:'Happy'});
    expect(typeof calledArg.date).toBe('string');
});