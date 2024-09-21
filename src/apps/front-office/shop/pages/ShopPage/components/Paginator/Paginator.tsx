import { Link } from "@mongez/react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "src/apps/front-office/design-system/components/ui/pagination";
import { createArray } from "src/apps/front-office/shop/utils";
import { PaginationInfo } from "src/apps/front-office/utils/types";
import URLS from "src/apps/front-office/utils/urls";

export type PaginatorProps = {
  pagination: PaginationInfo;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function Paginator({
  pagination,
  currentPage,
  setCurrentPage,
}: PaginatorProps) {
  const totalPages = pagination.pages;

  if (totalPages < 2) return null;

  const pages = createArray(totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <Link
              to={`${URLS.shop.list}?page=${currentPage - 1}`}
              onClick={() => setCurrentPage(currentPage - 1)}>
              <PaginationPrevious className="rounded-full " />
            </Link>
          ) : (
            <PaginationPrevious aria-disabled="true" className="rounded-full" />
          )}
        </PaginationItem>

        {pages.map(page => (
          <PaginationItem key={page}>
            <Link
              to={`${URLS.shop.list}?page=${page}`}
              onClick={() => setCurrentPage(page)}>
              <PaginationLink
                isActive={page === currentPage}
                className="rounded-full w-10 h-10 ">
                {page}
              </PaginationLink>
            </Link>
          </PaginationItem>
        ))}

        {currentPage < totalPages && totalPages > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          {currentPage < totalPages ? (
            <Link
              to={`${URLS.shop.list}?page=${currentPage + 1}`}
              onClick={() => setCurrentPage(currentPage + 1)}>
              <PaginationNext className="rounded-full" />
            </Link>
          ) : (
            <PaginationNext aria-disabled="true" className="rounded-full" />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
