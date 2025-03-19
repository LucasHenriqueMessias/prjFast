 SELECT usuario,
    count(cliente) AS cliente
   FROM tab_sinal_amarelo
  GROUP BY usuario;