import React, { useState, useMemo, useCallback } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import styles from "./text.module.css";

export const CustomKanban = () => (
  <div className="h-screen w-full overflow-hidden">
    <div className="grid place-content-center py-0">
      <h2 className="inline-block mb-12 text-center text-5xl text-white font-bold leading-none">
        {"Custom Board For Your Idea".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
    <Board />
  </div>
);

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [draggingCard, setDraggingCard] = useState(null);

  const moveCard = useCallback(
    (cardId, toColumn, beforeId = null) => {
      setCards((prev) => {
        const copy = [...prev];
        const card = copy.find((c) => c.id === cardId);
        if (!card) return prev;
        card.column = toColumn;

        const filtered = copy.filter((c) => c.id !== cardId);
        if (beforeId === null) filtered.push(card);
        else {
          const idx = filtered.findIndex((c) => c.id === beforeId);
          filtered.splice(idx, 0, card);
        }
        return filtered;
      });
    },
    [setCards]
  );

  const removeCard = useCallback(
    (cardId) => setCards((prev) => prev.filter((c) => c.id !== cardId)),
    []
  );

  return (
    <div className="flex h-full w-full gap-3 overflow-auto p-12 scrollbar-none relative z-30">
      {["backlog", "todo", "doing", "done"].map((col) => (
        <Column
          key={col}
          column={col}
          title={COLUMN_TITLES[col]}
          headingColor={COLUMN_COLORS[col]}
          cards={cards}
          draggingCard={draggingCard}
          setDraggingCard={setDraggingCard}
          moveCard={moveCard}
          setCards={setCards} // ✅ Pass real setter for AddCard
        />
      ))}
      <BurnBarrel removeCard={removeCard} draggingCard={draggingCard} />
    </div>
  );
};

const Column = React.memo(
  ({ title, headingColor, cards, column, draggingCard, setDraggingCard, moveCard, setCards }) => {
    const filteredCards = useMemo(
      () => cards.filter((c) => c.column === column),
      [cards, column]
    );

    const handleDrop = (e, beforeId = null) => {
      e.preventDefault();
      if (draggingCard) moveCard(draggingCard.id, column, beforeId);
      setDraggingCard(null);
    };

    const handleDragOver = (e) => e.preventDefault();

    return (
      <div className="w-56 shrink-0">
        <div className="mb-3 flex items-center justify-between">
          <h3 className={`font-medium ${headingColor}`}>{title}</h3>
          <span className="rounded text-sm text-gray-500">{filteredCards.length}</span>
        </div>
        <div
          onDrop={(e) => handleDrop(e)}
          onDragOver={handleDragOver}
          className="h-full w-full rounded-lg bg-gray-900/20"
        >
          {filteredCards.map((c) => (
            <Card
              key={c.id}
              card={c}
              setDraggingCard={setDraggingCard}
              column={column}
              handleDrop={handleDrop}
            />
          ))}
          <AddCard column={column} cards={cards} setCards={setCards} />
        </div>
      </div>
    );
  }
);

const Card = React.memo(({ card, setDraggingCard, handleDrop }) => (
  <div
    draggable
    onDragStart={() => setDraggingCard(card)}
    onDragEnd={(e) => handleDrop(e)}
    className="cursor-grab rounded-lg border border-gray-700 bg-gray-800 p-3 text-gray-100 mb-1"
  >
    <p className="text-sm">{card.title}</p>
  </div>
));

const BurnBarrel = React.memo(({ removeCard, draggingCard }) => {
  const [active, setActive] = useState(false);

  const handleDrop = () => {
    if (draggingCard) removeCard(draggingCard.id);
    setActive(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setActive(true);
      }}
      onDragLeave={() => setActive(false)}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded-lg border-2 text-3xl transition-colors ${
        active ? "border-red-600 bg-red-700/20 text-red-500" : "border-gray-600 bg-gray-800/20 text-gray-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
});

const AddCard = React.memo(({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newCard = {
      id: Date.now().toString(),
      column,
      title: text.trim(),
    };

    setCards((prev) => [...prev, newCard]);
    setAdding(false);
    setText("");
  };

  return adding ? (
    <form onSubmit={handleSubmit} className="mt-2">
      <textarea
        autoFocus
        placeholder="Add new task..."
        className="w-full rounded border border-violet-500 bg-gray-800/70 p-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-1.5 flex items-center justify-end gap-1.5">
        <button
          type="button"
          onClick={() => setAdding(false)}
          className="px-3 py-1.5 text-xs text-gray-400 hover:text-gray-100"
        >
          Close
        </button>
        <button
          type="submit"
          className="flex items-center gap-1.5 rounded bg-gray-100 px-3 py-1.5 text-xs text-gray-900 hover:bg-gray-300"
        >
          Add <FiPlus />
        </button>
      </div>
    </form>
  ) : (
    <button
      onClick={() => setAdding(true)}
      className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-gray-100"
    >
      Add card <FiPlus />
    </button>
  );
});

const DEFAULT_CARDS = [
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  { title: "Research DB options for new microservice", id: "5", column: "todo" },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },
  { title: "Refactor context providers to use Zustand", id: "8", column: "doing" },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  { title: "Set up DD dashboards for Lambda listener", id: "10", column: "done" },
];

const COLUMN_TITLES = {
  backlog: "Backlog",
  todo: "TODO",
  doing: "In Progress",
  done: "Complete",
};

const COLUMN_COLORS = {
  backlog: "text-gray-400",
  todo: "text-yellow-300",
  doing: "text-blue-300",
  done: "text-green-300",
};
