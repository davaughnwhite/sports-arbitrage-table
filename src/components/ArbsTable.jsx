import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import arbs from "../assets/arbs.json";

const ArbsTable = () => {
  const rows = arbs?.arbitrage_data?.map((arb, index) => {
    return {
      id: index + 1,
      ...arb,
    };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "league", headerName: "League", width: 130 },
    { field: "sport", headerName: "Sport", width: 130 },
    { field: "market", headerName: "Market" },
    { field: "home_team", headerName: "Home Team" },
    { field: "away_team", headerName: "Away Team" },
    {
      field: "best_price_home_name",
      headerName: "Best Price Home Name",
    },
    {
      field: "best_price_home_odd",
      headerName: "Best Price Home Odd",
      valueFormatter: (param) => param.value.toFixed(2),
    },
    {
      field: "best_price_home_odd_books",
      headerName: "Best Price Home Odd Books",
    },

    {
      field: "best_price_away_name",
      headerName: "Best Price Away Name",
    },
    {
      field: "best_price_away_odd",
      headerName: "Best Price Away Odd",
      type: "number",
      valueFormatter: (param) => param.value.toFixed(2),
    },
    {
      field: "best_price_away_odd_books",
      headerName: "Best Price Away Odd Books",
    },
    {
      field: "arb_percent",
      headerName: "Arb Percent",
      type: "number",
      valueFormatter: (param) => (param.value * 100).toFixed(2),
    },
    {
      field: "is_live",
      headerName: "Live?",
      type: "boolean",
    },
    {
      field: "bet_placed",
      headerName: "Bet Placed?",
      type: "boolean",
    },
    {
      field: "start_date",
      headerName: "Start Date",
      type: "date",
      valueGetter: (param) => new Date(param.value),
    },
  ];

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default ArbsTable;
