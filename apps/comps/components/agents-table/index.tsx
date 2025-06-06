"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";

import { displayAddress } from "@recallnet/address-utils/display";
import { Button } from "@recallnet/ui2/components/button";
import { Input } from "@recallnet/ui2/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@recallnet/ui2/components/table";

import { AgentResponse, AgentsMetadata } from "@/types";

export interface AgentsTableProps {
  agents: AgentResponse[];
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: string) => void;
  onLoadMore: () => void;
  hasMore: boolean;
  metadata?: AgentsMetadata;
}

export const AgentsTable: React.FC<AgentsTableProps> = ({
  agents,
  onFilterChange,
  onSortChange,
  onLoadMore,
  hasMore,
  metadata,
}) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<AgentResponse>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: () => (
          <span className="text-xs font-semibold tracking-widest text-slate-400">
            AGENT
          </span>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <Image
              src={row.original.imageUrl || "/agent-image.png"}
              alt={row.original.name}
              width={32}
              height={32}
              className="rounded"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-tight text-white">
                {row.original.name}
              </span>
              <span className="text-xs text-slate-400">
                {displayAddress(row.original.metadata.walletAddress || "")}
              </span>
            </div>
          </div>
        ),
        size: 350,
        enableSorting: true,
      },
      {
        id: "score",
        accessorKey: "score",
        header: () => (
          <span className="text-xs font-semibold tracking-widest text-slate-400">
            OVERALL ELO SCORE
          </span>
        ),
        cell: ({ row }) => (
          <span className="w-full text-right text-base font-semibold text-white">
            {row.original.score || row.original.stats?.eloAvg || 0}
          </span>
        ),
        size: 200,
        enableSorting: true,
      },
      {
        id: "actions",
        header: () => null,
        cell: ({ row }) => (
          <div className="flex w-full justify-end gap-2">
            {/* <Button
              variant="outline"
              size="sm"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
            >
              <span className="whitespace-nowrap">✓ VOTE</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
            >
              <span className="whitespace-nowrap">≡ COT</span>
            </Button> */}
            <Link href={`/agents/${row.original.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
              >
                <span className="whitespace-nowrap">PROFILE</span>
              </Button>
            </Link>
          </div>
        ),
        meta: { isActions: true },
      },
    ],
    [],
  );

  const table = useReactTable({
    data: agents,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
    manualFiltering: true,
    manualSorting: true,
    enableSorting: true,
    state: {
      sorting,
    },
    onSortingChange: (updater) => {
      const newSorting =
        typeof updater === "function" ? updater(sorting) : updater;
      setSorting(newSorting);

      // Convert sorting state to server-side sort format
      const sortString = newSorting
        .map((sort) => `${sort.desc ? "-" : ""}${sort.id}`)
        .join(",");

      onSortChange(sortString);
    },
  });

  // Virtualizer setup: show 10 rows at a time, each 64px tall
  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 64, // row height
    overscan: 5,
  });

  return (
    <div className="mt-12 w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          Participants ({metadata?.total ?? agents.length})
        </h2>
        <div className="mb-4 flex items-center gap-2 rounded bg-slate-900 px-3 py-2">
          <MagnifyingGlassIcon className="mr-2 h-4 w-4 text-slate-400" />
          <Input
            className="border-none bg-transparent text-white placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="SEARCH AGENT..."
            onChange={(e) => onFilterChange(e.target.value)}
            aria-label="Search agent"
          />
        </div>
      </div>
      <div
        ref={tableContainerRef}
        style={{
          height: "640px", // 10 rows * 64px
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                style={{ display: "flex", width: "100%" }}
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={
                      header.column.id === "actions"
                        ? { flex: 1 }
                        : { width: header.getSize() }
                    }
                    className={
                      `flex items-center text-xs font-semibold tracking-widest text-slate-400` +
                      (header.column.id === "score"
                        ? " justify-end pr-3 text-right"
                        : "") +
                      (header.column.getCanSort()
                        ? " cursor-pointer select-none"
                        : "")
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {header.column.getCanSort()
                      ? {
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string]
                      : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <TableBody
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: "relative",
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = table.getRowModel().rows[virtualRow.index];
              if (!row) return null;
              return (
                <TableRow
                  key={row.id}
                  className="border-b border-slate-700"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start}px)`,
                    display: "flex",
                  }}
                  ref={(el) => rowVirtualizer.measureElement(el)}
                  data-index={virtualRow.index}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="flex items-center"
                      style={
                        cell.column.id === "actions"
                          ? { flex: 1, justifyContent: "flex-end" }
                          : { width: cell.column.getSize() }
                      }
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
            onClick={onLoadMore}
          >
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};
