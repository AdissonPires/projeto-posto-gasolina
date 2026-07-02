import React, { useMemo, useState } from 'react';

type PurchaseRow = {
  fuel: string;
  quantity: string;
  supplier: string;
  deadline: string;
  pricePerL: string;
  total: string;
  statusClass: string;
  statusText: string;
};

export default function PurchasesPage(): JSX.Element {
  const [visible] = useState(true);

  const rows = useMemo<PurchaseRow[]>(
    () => [
      {
        fuel: 'Diesel S10',
        quantity: '30.000 L',
        supplier: 'BR Distribuidora',
        deadline: '24h',
        pricePerL: 'R$ 4,81',
        total: 'R$ 144.300',
        statusClass: 'err',
        statusText: 'Urgente',
      },
      {
        fuel: 'Etanol',
        quantity: '20.000 L',
        supplier: 'Raízen',
        deadline: '48h',
        pricePerL: 'R$ 3,38',
        total: 'R$ 67.600',
        statusClass: 'warn',
        statusText: 'Programar',
      },
      {
        fuel: 'Gasolina Comum',
        quantity: '25.000 L',
        supplier: 'Ipiranga',
        deadline: '72h',
        pricePerL: 'R$ 5,07',
        total: 'R$ 126.750',
        statusClass: 'info',
        statusText: 'Agendado',
      },
      {
        fuel: 'Diesel Comum',
        quantity: '15.000 L',
        supplier: 'BR Distribuidora',
        deadline: '5 dias',
        pricePerL: 'R$ 4,75',
        total: 'R$ 71.250',
        statusClass: 'ok',
        statusText: 'Normal',
      },
    ],
    []
  );

  return React.createElement(
    'div',
    { className: 'module-page active' },

    // Banner IA
    React.createElement(
      'div',
      { className: 'ai-banner' },
      React.createElement('div', { className: 'ai-avatar' }, '🤖'),
      React.createElement(
        'div',
        { className: 'ai-text' },
        React.createElement('h3', null, 'Previsão de Compras ', React.createElement('span', { className: 'tag' }, 'IA')),
        React.createElement(
          'p',
          null,
          'Com base no consumo médio, sazonalidade e prazo da distribuidora (24h), recomendo comprar ',
          React.createElement('strong', null, '30.000L de Diesel S10'),
          ' até amanhã às 10h. Estimativa de economia: ',
          React.createElement('strong', null, 'R$ 2.400'),
          ' ao negociar com a BR.'
        )
      )
    ),

    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-header' },
          React.createElement('div', { className: 'card-title' }, 'Próximas Compras Recomendadas'),
          React.createElement('button', { className: 'btn btn-yellow' }, '+ Nova Compra')
        ),
        React.createElement(
          'div',
          { className: 'table-wrap' },
          React.createElement(
            'table',
            null,
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement('th', null, 'Combustível'),
                React.createElement('th', null, 'Quantidade'),
                React.createElement('th', null, 'Fornecedor'),
                React.createElement('th', null, 'Prazo'),
                React.createElement('th', null, 'Preço/L'),
                React.createElement('th', null, 'Total'),
                React.createElement('th', null, 'Status')
              )
            ),
            React.createElement(
              'tbody',
              null,
              ...rows.map((r, idx) =>
                React.createElement(
                  'tr',
                  { key: idx },
                  React.createElement('td', null, React.createElement('strong', null, r.fuel)),
                  React.createElement('td', null, r.quantity),
                  React.createElement('td', null, r.supplier),
                  React.createElement('td', null, r.deadline),
                  React.createElement('td', null, r.pricePerL),
                  React.createElement('td', null, r.total),
                  React.createElement('td', null, React.createElement('span', { className: `status ${r.statusClass}` }, r.statusText))
                )
              )
            )
          )
        )
      )
    ),

    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'grid grid-3' },
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement('div', { className: 'card-header' }, React.createElement('div', { className: 'card-title' }, 'Consumo Médio Diário'), React.createElement('div', { className: 'card-icon blue' }, '📊')),
          React.createElement('div', { className: 'card-value' }, '6.140 L'),
          React.createElement('div', { className: 'card-change up' }, '▲ 4% vs mês anterior')
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement('div', { className: 'card-header' }, React.createElement('div', { className: 'card-title' }, 'Previsão 7 dias'), React.createElement('div', { className: 'card-icon yellow' }, '📅')),
          React.createElement('div', { className: 'card-value' }, '42.980 L'),
          React.createElement('div', { className: 'card-change neutral' }, 'Baseado em sazonalidade')
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement('div', { className: 'card-header' }, React.createElement('div', { className: 'card-title' }, 'Economia IA'), React.createElement('div', { className: 'card-icon green' }, '💰')),
          React.createElement('div', { className: 'card-value' }, 'R$ 8.4k'),
          React.createElement('div', { className: 'card-change up' }, 'últimos 30 dias')
        )
      )
    )
  );
}
