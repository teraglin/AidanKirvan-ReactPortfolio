"use client";

import { useState } from "react";
import type { TabletopGame, NewTabletopGame, GameStatus } from "@/lib/types";
import { addGame, updateGame, deleteGame } from "@/app/lib/data-actions";
import GameForm from "./GameForm";

interface GamesListProps {
  initialGames: TabletopGame[];
  statusColors: Record<GameStatus, string>;
}

export default function GamesList({
  initialGames,
  statusColors
}: GamesListProps) {
  const [games, setGames] = useState(initialGames);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAdd = async (data: NewTabletopGame) => {
    setLoading("add");
    setError(null);

    const result = await addGame(data);

    if (result.success) {
      setShowAddForm(false);
      window.location.reload();
    } else {
      setError(result.error || "Failed to add game");
    }

    setLoading(null);
  };

  const handleUpdate = async (id: string, data: Partial<TabletopGame>) => {
    setLoading(id);
    setError(null);

    const result = await updateGame(id, data);

    if (result.success) {
      setGames((prev) =>
        prev.map((g) => (g.id === id ? { ...g, ...data } : g))
      );
      setEditingId(null);
    } else {
      setError(result.error || "Failed to update game");
    }

    setLoading(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this game?")) return;

    setLoading(id);
    setError(null);

    const result = await deleteGame(id);

    if (result.success) {
      setGames((prev) => prev.filter((g) => g.id !== id));
    } else {
      setError(result.error || "Failed to delete game");
    }

    setLoading(null);
  };

  const handleToggleVisibility = async (game: TabletopGame) => {
    await handleUpdate(game.id, { displayOn: !game.displayOn });
  };

  const getStatusColor = (status: GameStatus) => {
    const colorMap: Record<string, string> = {
      yellow: "bg-yellow text-black",
      blue: "bg-blue text-black",
      green: "bg-green-500 text-black"
    };
    return colorMap[statusColors[status]] || "bg-white/20 text-white";
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-red-500/20 border border-red-500 p-4 text-red-300">
          {error}
        </div>
      )}

      <button
        onClick={() => setShowAddForm(true)}
        className="bg-blue text-black font-bold py-2 px-6 uppercase transition-all hover:bg-opacity-90"
      >
        + Add Game
      </button>

      {showAddForm && (
        <div className="bg-charcoal p-6">
          <h2 className="text-white uppercase mb-4">Add New Game</h2>
          <GameForm
            onSubmit={handleAdd}
            onCancel={() => setShowAddForm(false)}
            loading={loading === "add"}
          />
        </div>
      )}

      <div className="space-y-2">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-charcoal p-4 flex flex-col lg:flex-row lg:items-center gap-4"
          >
            {editingId === game.id ? (
              <div className="flex-1">
                <GameForm
                  game={game}
                  onSubmit={(data) =>
                    handleUpdate(game.id, data as Partial<TabletopGame>)
                  }
                  onCancel={() => setEditingId(null)}
                  loading={loading === game.id}
                />
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-white font-bold">{game.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 uppercase font-bold ${getStatusColor(
                        game.status
                      )}`}
                    >
                      {game.status}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 uppercase ${
                        game.displayOn
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {game.displayOn ? "Visible" : "Hidden"}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm mt-1 line-clamp-1">
                    {game.players} players • {game.time} min
                  </p>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleToggleVisibility(game)}
                    disabled={loading === game.id}
                    className="bg-white/10 text-white py-1 px-3 text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                  >
                    {game.displayOn ? "Hide" : "Show"}
                  </button>
                  <button
                    onClick={() => setEditingId(game.id)}
                    disabled={loading === game.id}
                    className="bg-yellow text-black font-bold py-1 px-3 text-sm hover:bg-orange transition-colors disabled:opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(game.id)}
                    disabled={loading === game.id}
                    className="bg-red-500 text-white font-bold py-1 px-3 text-sm hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    {loading === game.id ? "..." : "Delete"}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {games.length === 0 && (
        <div className="bg-charcoal p-8 text-center">
          <p className="text-white/50">No games yet. Add one above!</p>
        </div>
      )}
    </div>
  );
}
