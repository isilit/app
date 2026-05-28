import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Group.css';
import defaultAvatar from '../../avatars/default.jpg';
import { students } from '../../students';

export default function Group() {
  const navigate = useNavigate();

  function onStudentClick(student) {
    navigate(`/user/${student.id}`);
  }
  return (
    <div className="group">
      <h3>Моя группа</h3>
      
      <div className="students-list">
        {students.map((student) => (
          <div
            key={student.id}
            className="studentCountainer"
            onClick={() => onStudentClick(student)}
          >
            <span className="place">#{student.id}</span>
            <img
              src={defaultAvatar}
              alt="Аватар"
              className="avatar"
            />
            <div className="studentStats">
              <p className="studentName">{student.lastName} {student.firstName}</p>
              <p className="attendance">Посещаемость: {student.attendance}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}