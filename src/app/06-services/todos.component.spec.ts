import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { from, throwError, empty } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should fetch all todos on load', () => {
    let spy = spyOn(service, 'getTodos').and.returnValue(from([1, 2, 3]));
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo to todos', () => {
    // Arrange
    const newTodo = { title: 'xyz' };
    spyOn(service, 'add').and.callFake(t => {
      return from([newTodo]);
    });
    // Act
    component.add();
    // Assert
    expect(component.todos.indexOf(newTodo)).toBeGreaterThan(-1);
  });

  it('should set message if server returns error', () => {
    const error = 'server error';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should delete todo if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT delete todo if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });
});