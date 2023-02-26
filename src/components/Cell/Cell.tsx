import React, { useState } from "react";
import { CellTypes } from "../../types";
import styles from "./Cell.module.css";

export const Cell: React.FunctionComponent<CellTypes> = ({ number, color }) => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);
  return (
    <div
      className={styles.cell}
      style={{ backgroundColor: color }}
      onClick={() => setIsNumberVisible(!isNumberVisible)}
    >
      {isNumberVisible && <div className={styles.cellContent}>{number}</div>}
    </div>
  );
};

interface CellProps {
  number: number;
  color: string;
}

interface CellState {
  isNumberVisible: boolean;
  updateLog: string[];
  responseData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  } | null;
}

// 1. Написать "сложный" компонент с логикой с рядом дочерних презентационных компонентов(можно как основу взять дз из урока про JSX)
export class ClassCell extends React.Component<CellProps, CellState> {
  // 2. Описать constructor как минимум в одном компоненте, объявить в конструкторе стейт и привязать контекст методов
  constructor(props: CellProps) {
    super(props);
    this.state = {
      isNumberVisible: false,
      updateLog: [],
      responseData: null,
    };
    this.setIsNumberVisible = this.setIsNumberVisible.bind(this);
  }
  // 3.Описать componentDidMount как минимум в одном компоненте, получить в нем данные сервера(можно использовать заглушку или сторонние сервисы,
  // например https://jsonplaceholder.typicode.com/). Описать подписку на событие
  componentDidMount() {
    window.addEventListener("click", () => {
      this.setState((prevState) => ({
        updateLog: [...prevState.updateLog, "click"],
      }));
    });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => this.setState({ responseData: json }));
  }

  // 5. Описать componentDidUpdate как минимум в одном компоненте, описать в нем условие реализовать обновление стейта при этом условии
  componentDidUpdate(prevProps: CellProps, prevState: CellState) {
    if (prevState.isNumberVisible !== this.state.isNumberVisible) {
      this.setState((prevState) => ({
        updateLog: [...prevState.updateLog, "component just updated"],
      }));
    }
  }
  // 4. Описать shouldComponentUpdate как минимум в одном компоненте,
  // произвести в нем оптимизацию производительности(если будет притянутый за уши случай - ничего страшного)
  shouldComponentUpdate(nextProps: CellProps, nextState: CellState) {
    if (nextProps.color === "green") {
      return false;
    } else return true;
  }

  // 6. Описать componentWillUnmout в компоненте, где в рамках componentDidMount была подписка на событие, реализовать отписку от этого события
  componentWillUnmount() {
    window.removeEventListener("click", () => null);
  }

  setIsNumberVisible() {
    this.setState((prevState: CellState) => ({
      isNumberVisible: !prevState.isNumberVisible,
    }));
  }

  render() {
    return (
      <div data-testid="cell">
        <div style={{ display: "flex" }}>
          <div
            className={styles.cell}
            style={{ backgroundColor: this.props.color }}
            onClick={() => this.setIsNumberVisible()}
          >
            {this.state.isNumberVisible && (
              <div className={styles.cellContent}>{this.props.number}</div>
            )}
          </div>
          {this.state.responseData && (
            <div>
              <div>ComponentDidMount response data:</div>
              <div>{this.state.responseData.title}</div>
            </div>
          )}
        </div>
        update log:
        <div data-testid="updateLog">
          {this.state.updateLog.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
        </div>
      </div>
    );
  }
}
