"use client";

import { useState, useMemo } from "react";
import { MapPin, Phone, User, Search, FileText } from "lucide-react";

import { branches } from "../../data/branches";
import styles from "./centers.module.css";

export default function Centers() {
  const [selectedCentre, setSelectedCentre] = useState(branches[4]);

  const [activeSystemFilter, setActiveSystemFilter] = useState("All Systems");

  const [activeTypeFilter, setActiveTypeFilter] = useState("All Types");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredCentres = useMemo(() => {
    return branches.filter((centre) => {
      const matchesSystem =
        activeSystemFilter === "All Systems" ||
        centre.system === activeSystemFilter;

      const matchesType =
        activeTypeFilter === "All Types" || centre.type === activeTypeFilter;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        centre.name.toLowerCase().includes(query) ||
        centre.location.toLowerCase().includes(query) ||
        centre.code.toLowerCase().includes(query) ||
        centre.contactPerson.toLowerCase().includes(query);

      return matchesSystem && matchesType && matchesSearch;
    });
  }, [activeSystemFilter, activeTypeFilter, searchQuery]);

  return (
    <main className={styles.page}>
      <section className={styles.directory} id="directory">
        <div className={styles.header}>
          <div className={styles.heading}>
            <h2 className={styles.title}>
              <FileText className={styles.titleIcon} aria-hidden="true" />
              Centres Directory
            </h2>

            <p className={styles.subtitle}>
              All registered domestic centres across Zimbabwe
            </p>
          </div>

          <label className={styles.searchBox}>
            <Search className={styles.searchIcon} aria-hidden="true" />

            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search centres..."
              aria-label="Search centres"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>
        </div>

        <div className={styles.tableInfo}>
          <span>
            {filteredCentres.length}{" "}
            {filteredCentres.length === 1 ? "centre" : "centres"}
          </span>

          {searchQuery.trim() && (
            <button
              type="button"
              className={styles.clearSearch}
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </button>
          )}
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr>
                <th scope="col">Centre</th>
                <th scope="col">Location</th>

                <th scope="col" className={styles.typeColumn}>
                  Type
                </th>

                <th scope="col">Contact</th>
              </tr>
            </thead>

            <tbody className={styles.tableBody}>
              {filteredCentres.map((centre) => {
                const isSelected = selectedCentre?.id === centre.id;

                return (
                  <tr
                    key={centre.id}
                    onClick={() => setSelectedCentre(centre)}
                    className={
                      isSelected ? styles.selectedRow : styles.tableRow
                    }
                    aria-selected={isSelected}
                  >
                    <td>
                      <div className={styles.centreCell}>
                        <div
                          className={
                            isSelected ? styles.selectedPin : styles.pin
                          }
                        >
                          <MapPin
                            className={styles.pinIcon}
                            aria-hidden="true"
                          />
                        </div>

                        <div className={styles.centreDetails}>
                          <span className={styles.centreName}>
                            {centre.name}
                          </span>

                          <span className={styles.centreCode}>
                            {centre.code}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className={styles.locationCell}>
                        <span className={styles.locationName}>
                          {centre.location}
                        </span>

                        <span className={styles.country}>Zimbabwe</span>
                      </div>
                    </td>

                    <td className={styles.typeColumn}>
                      <span className={styles.typeBadge}>{centre.type}</span>
                    </td>

                    <td>
                      <div className={styles.contactCell}>
                        <div className={styles.contactItem}>
                          <User
                            className={styles.contactIcon}
                            aria-hidden="true"
                          />

                          <span className={styles.contactName}>
                            {centre.contactPerson}
                          </span>
                        </div>

                        <div className={styles.contactItem}>
                          <Phone
                            className={styles.phoneIcon}
                            aria-hidden="true"
                          />

                          <span className={styles.phoneNumber}>
                            {centre.phone}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredCentres.length === 0 && (
                <tr>
                  <td colSpan={4}>
                    <div className={styles.emptyState}>
                      <Search className={styles.emptyIcon} aria-hidden="true" />

                      <p className={styles.emptyTitle}>No centres found</p>

                      <p className={styles.emptyDescription}>
                        Try another centre name, location, code, or contact
                        person.
                      </p>

                      <button
                        type="button"
                        className={styles.clearSearch}
                        onClick={() => setSearchQuery("")}
                      >
                        Clear search
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.tableFooter}>
          <span>
            Showing {filteredCentres.length} of {branches.length} centres
          </span>

          <span className={styles.footerHint}>
            Select a row to focus on a centre
          </span>
        </div>
      </section>
    </main>
  );
}
