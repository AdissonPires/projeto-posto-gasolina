import React, { useMemo } from 'react';

type StockItem = {
  product: string;
  category: string;
  stock: number;
  min: number;
};

function pct(stock: number, min: number) {
  // apenas p/ visual: percent do “mínimo”
  if (min <= 0) return 0;
  return Math.max(0, Math.min(100, Math.round((stock / min) * 100)));
}

export default function StockPage(): JSX.Element {
  const items = useMemo<StockItem[]>(
    () => [
      { product: 'Óleo Lubrax 5W30', category: 'Lubrificantes', stock: 48, min: 20 },
      { product: 'Água Mineral 500ml', category: 'Bebidas', stock: 120, min: 100 },
      { product: 'Aditivo Radiador', category: 'Aditivos', stock: 8, min: 15 },
      { product: 'Filtro de Óleo', category: 'Filtros', stock: 32, min: 20 },
      { product: 'Óleo Motor 20W50', category: 'Óleos', stock: 24, min: 15 },
      { product: 'Palheta Limpador', category: 'Palhetas', stock: 14, min: 10 },
      { product: 'Fluido de Freio', category: 'Aditivos', stock: 6, min: 12 },
    ],
    []
  );

  const summary = useMemo(() => {
    const totalUnits = items.reduce((sum, it) => sum + it.stock, 0);
    const critical = items.filter((it) => it.stock < it.min).length;
    const categories = new Set(items.map((it) => it.category)).size;

    return {
      total: { value: String(items.length), text: `${totalUnits.toLocaleString('pt-BR')} un. no total` },
      critical: { value: String(critical), text: critical > 0 ? 'Abaixo do mínimo' : 'Nada crítico' },
      categories: { value: String(categories), text: 'Grupos de produtos' },
      units: { value: totalUnits.toLocaleString('pt-BR'), text: 'Unidades em estoque' },
    };
  }, [items]);

  return React.createElement(
    'div',
    { className: 'module-page active' },

    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'grid grid-4' },
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Itens Cadastrados'),
            React.createElement('div', { className: 'card-icon blue' }, '📦')
          ),
          React.createElement('div', { className: 'card-value' }, summary.total.value),
          React.createElement('div', { className: 'card-change neutral' }, summary.total.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Itens Críticos'),
            React.createElement('div', { className: 'card-icon red' }, '⚠️')
          ),
          React.createElement('div', { className: 'card-value' }, summary.critical.value),
          React.createElement('div', { className: 'card-change ' + (Number(summary.critical.value) > 0 ? 'down' : 'up') }, summary.critical.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Categorias'),
            React.createElement('div', { className: 'card-icon teal' }, '🗂️')
          ),
          React.createElement('div', { className: 'card-value' }, summary.categories.value),
          React.createElement('div', { className: 'card-change neutral' }, summary.categories.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Total em Estoque'),
            React.createElement('div', { className: 'card-icon green' }, '📊')
          ),
          React.createElement('div', { className: 'card-value' }, summary.units.value),
          React.createElement('div', { className: 'card-change neutral' }, summary.units.text)
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
          React.createElement('div', { className: 'card-title' }, 'Controle de Estoque Geral'),
          React.createElement('button', { className: 'btn btn-primary' }, '+ Adicionar Item')
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
                React.createElement('th', null, 'Produto'),
                React.createElement('th', null, 'Categoria'),
                React.createElement('th', null, 'Estoque'),
                React.createElement('th', null, 'Mínimo'),
                React.createElement('th', null, 'Nível'),
                React.createElement('th', null, 'Status')
              )
            ),
            React.createElement(
              'tbody',
              null,
              ...items.map((it) => {
                const p = pct(it.stock, it.min);
                let barClass = 'green';
                let status = 'ok';
                if (it.stock < it.min) {
                  barClass = 'red';
                  status = 'err';
                } else if (it.stock < it.min * 1.2) {
                  barClass = 'yellow';
                  status = 'warn';
                }
                return React.createElement(
                  'tr',
                  { key: it.product },
                  React.createElement('td', null, React.createElement('strong', null, it.product)),
                  React.createElement('td', null, it.category),
                  React.createElement('td', null, `${it.stock} un`),
                  React.createElement('td', null, `${it.min} un`),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(
                      'div',
                      { className: 'progress', style: { width: 120 } },
                      React.createElement('div', { className: `progress-bar ${barClass}`, style: { width: `${p}%` } })
                    )
                  ),
                  React.createElement('td', null, React.createElement('span', { className: `status ${status}` }, status === 'ok' ? 'OK' : status === 'warn' ? 'Atenção' : 'Baixo'))
                );
              })
            )
          )
        )
      )
    )
  );
}
