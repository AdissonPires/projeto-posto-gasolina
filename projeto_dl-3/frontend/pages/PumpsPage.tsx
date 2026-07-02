import React, { useMemo } from 'react';

type Pump = {
  number: string;
  statusClass: string;
  statusText: string;
  todayLiters: string;
  todayRevenue: string;
  downtime: string;
  operator: string;
};

function parseNumber(v: string): number {
  return Number(v.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0;
}

export default function PumpsPage(): JSX.Element {
  const pumps = useMemo<Pump[]>(
    () => [
      { number: 'Bomba 01', statusClass: 'active', statusText: '● Ativa', todayLiters: '2.840 L', todayRevenue: 'R$ 16.728', downtime: '12 min', operator: 'Carlos M.' },
      { number: 'Bomba 02', statusClass: 'active', statusText: '● Ativa', todayLiters: '3.120 L', todayRevenue: 'R$ 18.345', downtime: '8 min', operator: 'Ana P.' },
      { number: 'Bomba 03', statusClass: 'idle', statusText: '○ Parada', todayLiters: '1.980 L', todayRevenue: 'R$ 11.234', downtime: '45 min', operator: 'João S.' },
      { number: 'Bomba 04', statusClass: 'active', statusText: '● Ativa', todayLiters: '2.650 L', todayRevenue: 'R$ 15.120', downtime: '15 min', operator: 'Marcos L.' },
      { number: 'Bomba 05', statusClass: 'maint', statusText: '⚠ Manutenção', todayLiters: '1.240 L', todayRevenue: 'R$ 7.012', downtime: '2h 10min', operator: '-' },
      { number: 'Bomba 06', statusClass: 'active', statusText: '● Ativa', todayLiters: '2.980 L', todayRevenue: 'R$ 17.520', downtime: '10 min', operator: 'Pedro A.' },
      { number: 'Bomba 07', statusClass: 'active', statusText: '● Ativa', todayLiters: '1.850 L', todayRevenue: 'R$ 10.840', downtime: '18 min', operator: 'Lucas F.' },
      { number: 'Bomba 08', statusClass: 'idle', statusText: '○ Parada', todayLiters: '1.760 L', todayRevenue: 'R$ 10.633', downtime: '32 min', operator: 'Rafael O.' },
    ],
    []
  );

  const summary = useMemo(() => {
    const active = pumps.filter((p) => p.statusClass === 'active').length;
    const maint = pumps.filter((p) => p.statusClass === 'maint').length;
    const totalLiters = pumps.reduce((sum, p) => sum + parseNumber(p.todayLiters), 0);
    const totalRevenue = pumps.reduce((sum, p) => sum + parseNumber(p.todayRevenue), 0);

    return {
      active: { value: `${active}/${pumps.length}`, text: `${pumps.length - active - maint} paradas` },
      revenue: { value: 'R$ ' + totalRevenue.toLocaleString('pt-BR'), text: 'Faturado hoje' },
      liters: { value: totalLiters.toLocaleString('pt-BR') + ' L', text: 'Volume bombeado hoje' },
      maint: { value: String(maint), text: maint > 0 ? 'Bomba 05 em reparo' : 'Nenhuma parada crítica' },
    };
  }, [pumps]);

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
            React.createElement('div', { className: 'card-title' }, 'Bombas Ativas'),
            React.createElement('div', { className: 'card-icon green' }, '⛽')
          ),
          React.createElement('div', { className: 'card-value' }, summary.active.value),
          React.createElement('div', { className: 'card-change neutral' }, summary.active.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Faturamento Hoje'),
            React.createElement('div', { className: 'card-icon blue' }, '💰')
          ),
          React.createElement('div', { className: 'card-value' }, summary.revenue.value),
          React.createElement('div', { className: 'card-change up' }, summary.revenue.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Volume Hoje'),
            React.createElement('div', { className: 'card-icon teal' }, '🛢️')
          ),
          React.createElement('div', { className: 'card-value' }, summary.liters.value),
          React.createElement('div', { className: 'card-change neutral' }, summary.liters.text)
        ),
        React.createElement(
          'div',
          { className: 'card' },
          React.createElement(
            'div',
            { className: 'card-header' },
            React.createElement('div', { className: 'card-title' }, 'Em Manutenção'),
            React.createElement('div', { className: 'card-icon yellow' }, '⚠️')
          ),
          React.createElement('div', { className: 'card-value' }, summary.maint.value),
          React.createElement('div', { className: 'card-change ' + (summary.maint.value === '0' ? 'up' : 'down') }, summary.maint.text)
        )
      )
    ),

    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'section-header' },
        React.createElement('h3', null, 'Performance por Bomba')
      ),
      React.createElement(
        'div',
        { className: 'grid grid-4' },
        ...pumps.map((p) =>
          React.createElement(
            'div',
            { key: p.number, className: 'pump-card' },
            React.createElement(
              'div',
              { className: 'pump-header' },
              React.createElement('div', { className: 'pump-number' }, p.number),
              React.createElement('span', { className: `pump-status ${p.statusClass}` }, p.statusText)
            ),
            React.createElement(
              'div',
              { className: 'pump-stats' },
              React.createElement('div', { className: 'pump-stat' }, React.createElement('strong', null, p.todayLiters), React.createElement('span', null, 'Hoje')),
              React.createElement('div', { className: 'pump-stat' }, React.createElement('strong', null, p.todayRevenue), React.createElement('span', null, 'Faturamento')),
              React.createElement('div', { className: 'pump-stat' }, React.createElement('strong', null, p.downtime), React.createElement('span', null, 'Tempo parada')),
              React.createElement('div', { className: 'pump-stat' }, React.createElement('strong', null, p.operator), React.createElement('span', null, 'Operador'))
            )
          )
        )
      )
    )
  );
}
