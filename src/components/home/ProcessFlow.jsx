import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import styles from "./text.module.css";
export const CustomKanban = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
    <div className="grid place-content-center py-0 mb-1 ">
            <h2 className="inline-block text-center text-5xl text-white font-bold leading-none ">
              {"Custom Kanban For Your Idea".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h2>
          </div>
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="flex h-full w-full gap-3 overflow-auto p-12 scrollbar-none relative z-30">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-gray-400"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-300"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-blue-300"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-green-300"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();
    indicators.forEach((i) => (i.style.opacity = "0"));
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-gray-500">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full rounded-lg transition-colors ${
          active ? "bg-gray-800/70" : "bg-gray-900/0"
        }`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded-lg border border-gray-700 bg-gray-800 p-3 active:cursor-grabbing text-gray-100"
      >
        <p className="text-sm">{title}</p>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-500 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => setActive(false);

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    setCards((pv) => pv.filter((c) => c.id !== cardId));
    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded-lg border-2 text-3xl transition-colors ${
        active
          ? "border-red-600 bg-red-700/20 text-red-500"
          : "border-gray-600 bg-gray-800/20 text-gray-500"
      }`}
    >
      {active ? <FaFire className="animate-bounce" /> : <FiTrash />}
    </div>
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newCard = { column, title: text.trim(), id: Math.random().toString() };
    setCards((pv) => [...pv, newCard]);
    setAdding(false);
    setText("");
  };

  return adding ? (
    <motion.form layout onSubmit={handleSubmit} className="mt-2">
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        autoFocus
        placeholder="Add new task..."
        className="w-full rounded border border-violet-500 bg-gray-800/70 p-3 text-sm text-gray-100 placeholder-gray-500 focus:outline-none"
      />
      <div className="mt-1.5 flex items-center justify-end gap-1.5">
        <button
          onClick={() => setAdding(false)}
          className="px-3 py-1.5 text-xs text-gray-400 transition-colors hover:text-gray-100"
        >
          Close
        </button>
        <button
          type="submit"
          className="flex items-center gap-1.5 rounded bg-gray-100 px-3 py-1.5 text-xs text-gray-900 transition-colors hover:bg-gray-300"
        >
          <span>Add</span>
          <FiPlus />
        </button>
      </div>
    </motion.form>
  ) : (
    <motion.button
      layout
      onClick={() => setAdding(true)}
      className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:text-gray-100"
    >
      <span>Add card</span>
      <FiPlus />
    </motion.button>
  );
};

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
