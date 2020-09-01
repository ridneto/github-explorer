import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no github</Title>

      <Form action="">
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="wwww/asdhuas">
          <img
            src="https://images.unsplash.com/photo-1571171285419-408dc73f8dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="koe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>koe papapapda</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="wwww/asdhuas">
          <img
            src="https://images.unsplash.com/photo-1571171285419-408dc73f8dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="koe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>koe papapapda</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="wwww/asdhuas">
          <img
            src="https://images.unsplash.com/photo-1571171285419-408dc73f8dc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="koe"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>koe papapapda</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
