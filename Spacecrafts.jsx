import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSpace } from "../../context/SpaceTravelContext.jsx";
import * as api from "../../services/SpaceTravelApi.js";
import Loading from "../../components/Loading/Loading.jsx";
import styles from "./Spacecrafts.module.css";

export default function Spacecrafts() {
  const { spacecrafts, loading, error, refreshAll, setSpacecrafts } = useSpace();
  const nav = useNavigate();

  useEffect(() => { if (!spacecrafts.length) refreshAll(); }, [spacecrafts.length, refreshAll]);

  async function onDelete(id) {
    const res = await api.destroySpacecraftById(id);
    if (res?.isError) { alert("Could not decommission."); return; }
    setSpacecrafts(list => list.filter(s => s.id !== id));
  }

  if (loading) return <Loading label="Fetching spacecrafts…" />;
  if (error) return <p role="alert">Failed to load spacecrafts.</p>;

  return (
    <section className={styles.list}>
      <header className={styles.list__header}>
        <h2>Spacecrafts</h2>
        <button className="btn" onClick={() => nav("/spacecrafts/build")}>Build New</button>
      </header>

      <ul className="grid">
        {spacecrafts.map(sc => (
          <li key={sc.id} className="card">
            <div className={styles.item__title}>
              <strong style={{ fontSize: "var(--step-1)" }}>{sc.name}</strong>
              <span className={styles.item__meta}>Cap {sc.capacity}</span>
            </div>

            <p className={styles.item__desc}>{sc.description}</p>

            <div className={styles.item__actions}>
              <Link className="btn" to={`/spacecrafts/${sc.id}`}>View</Link>
              <button className="btn btn--danger" onClick={() => onDelete(sc.id)}>Decommission</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
