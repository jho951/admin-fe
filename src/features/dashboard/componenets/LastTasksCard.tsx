/**
 * @file src/features/dashboard/componenets/LastTasksCard.tsx
 * @description 대시보드 화면 구성 컴포넌트을 담당하는 모듈입니다.
 */
import React from "react";

import {Card} from "@jho951/ui-components";
import styles from "./LastTasksCard.module.css";


interface TaskRow {
    id: number;
    name: string;
    admin: string;
    members: number;
    status: "In progress" | "Done";
    runtime: string;
    finish: string;
}

const mockTasks: TaskRow[] = [
    {
        id: 1,
        name: "ClientOnboarding - Circle",
        admin: "Samanta J.",
        members: 3,
        status: "In progress",
        runtime: "6 hours",
        finish: "6 Mon",
    },
    {
        id: 2,
        name: "Meeting with Webflow & Notion",
        admin: "Bob P.",
        members: 4,
        status: "Done",
        runtime: "2 hours",
        finish: "7 Tue",
    },
    // 필요하면 더 추가
];

const LastTasksCard: React.FC = () => {
    return (
        <Card className={styles.card}>
            <Card.Header>
                <div className={styles.headerRow}>
                    <div>
                        <h2 className={styles.title}>Last tasks</h2>
                        <p className={styles.subtitle}>
                            117 total, proceed to resolve them
                        </p>
                    </div>

                    <div className={styles.summary}>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>Done</span>
                            <span className={styles.summaryValue}>94</span>
                        </div>
                        <div className={styles.summaryItem}>
                            <span className={styles.summaryLabel}>In progress</span>
                            <span className={styles.summaryValue}>23</span>
                        </div>
                    </div>
                </div>
            </Card.Header>


            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th />
                        <th>Name</th>
                        <th>Admin</th>
                        <th>Members</th>
                        <th>Status</th>
                        <th>Run time</th>
                        <th>Finish date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockTasks.map((task) => (
                        <tr key={task.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{task.name}</td>
                            <td>{task.admin}</td>
                            <td>{task.members}</td>
                            <td>
                  <span
                      className={`${styles.status} ${
                          styles[
                              `status-${task.status
                                  .replace(" ", "")
                                  .toLowerCase()}` as
                                  | "status-inprogress"
                                  | "status-done"
                              ]
                      }`}
                  >
                    {task.status}
                  </span>
                            </td>
                            <td>{task.runtime}</td>
                            <td>{task.finish}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default LastTasksCard;
