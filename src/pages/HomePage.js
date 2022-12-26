import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import AdvancedTable from "../components/AdvancedTable/AdvancedTable";
import makeData from "../lib/functions";
import { v4 as uuidv4 } from "uuid";

const perPage = 10;

const HomePage = () => {
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);

  const handleChangePagination = (event, value) => {
    setPage(Number(value));
  };

  useEffect(() => {
    setRows(
      makeData(100)
        .map((el) => {
          return {
            age: el.age,
            progress: el.progress,
            status: el.status,
            visits: el.visits,
            id: uuidv4()
          };
        })
        .slice((page - 1) * perPage, page * perPage)
    );
  }, [page]);

  const s = {
    main: {
      background: "linear-gradient(to bottom, #9b9d1b 0%, #325123 100%)",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    tableContainerMain: {
      mt: "5rem",
      mb: "4rem"
    },
    tableMain: {
      width: "100%"
    },
    pagination: {
      mb: "8rem",
      "&.MuiPagination-root": {
        "& li": {
          mx: ".1rem"
        },
        "& li:first-of-type .MuiPaginationItem-root": {
          background: "transparent",
          color: "",
          "& svg": {
            fontSize: "2.7rem"
          }
        },
        "& li:last-of-type .MuiPaginationItem-root": {
          background: "transparent",
          color: "primary.main",
          "& svg": {
            fontSize: "2.7rem"
          }
        },

        "& .MuiPaginationItem-root": {
          background: "primary.main",
          color: "#C1C2C5",
          borderRadius: "1rem",
          p: { xs: 0, sm: "0 6px" },
          height: { xs: "2.5rem", sm: "32px" },
          minWidth: { xs: "2.5rem", sm: "32px" },

          fontSize: {
            xs: "1.2rem",
            sm: "1.4rem",
            md: "1.6rem"
          },
          ":hover": {
            background: "primary.main"
          }
        },

        "& .MuiPaginationItem-root.Mui-selected": {
          background: "#FFBB00",
          color: "primary.main"
        }
      }
    }
  };

  return (
    <Box sx={s.main}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={s.tableContainerMain}>
          <Grid container justifyContent="center">
            <Grid
              item
              sx={{
                flex: "0 1 120rem"
              }}>
              <Box
                sx={{
                  width: "100%",
                  overflowX: "auto"
                }}>
                <Grid container direction="column" sx={s.tableMain}>
                  <AdvancedTable rows={rows} />
                </Grid>
              </Box>

              <Grid container justifyContent="center">
                <Pagination
                  page={page}
                  count={100}
                  onChange={handleChangePagination}
                  sx={s.pagination}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
