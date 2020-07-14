import styled from 'styled-components';

export const AppDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  padding: 10px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  position: absolute;
  top: 0;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  width: 50vw;
  min-width: 300px;
`;

export const Form = styled.form`
    border: 1px solid #ddd;
    padding: 5px 10px;
    display: flex;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 1.4rem;
    border: none;
`;

export const ButtonAdd = styled.button`
    background-color: #5d5;
    border: none;
    color: white;
    height: 100%;
    width: 35px;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
`;

export const ButtonTrash = styled.button`
    background-color: transparent;
    border: none;
    color: #f00;
    font-size: 1.4rem;
    cursor: pointer;
`;

export const Ul = styled.ul`
    margin: 25px 0;
    width: 100%;
    border-radius: 5px;
`;

export const Li = styled.li`
    text-decoration: ${props => (props.mark) ? 'line-through' : 'none'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 15px;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
`;

export const InputCheckbox = styled.input`
`;

export const Span = styled.span`
    font-size: 1.2rem;
    margin-left: 10px;
`;