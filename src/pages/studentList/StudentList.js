import React from 'react';
import './studentList.css'

export default class StudentList extends React.Component {

    render() {
        const { headerColumns, studentList } = this.props;
        console.log(studentList);
        return (
            <div className="student_list">
                <div className="student_list_primary">
                    <div className="student_info student_info_header">
                        {headerColumns.photo ?
                            <div>Фото</div>
                            : ""
                        }
                        <div>ФИО</div>
                    </div>
                    {Object.entries(studentList).map(([id, student]) => (
                        <div key={id} className="student_info">
                            {headerColumns.photo ?
                                <div>
                                    {student.photo_url ? <img src={student.photo_url} width="50" /> : <div className="student_image">+добавить фото</div>}
                                </div> : ""
                            }
                            <div className="student_name">
                                {student.name}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="student_list_secondary">
                    <div className="student_info student_info_header">
                        {headerColumns.phone ? <div>Телефон</div> : ""}
                        {headerColumns.email ? <div>Email</div> : ""}
                        {headerColumns.id ? <div>Id</div> : ""}
                        {headerColumns.date ? <div>Дата примера</div> : ""}
                        <div>Опекуны</div>
                    </div>
                    {Object.entries(studentList).map(([id, student]) => (
                        <div key={id} className="student_info">
                            {headerColumns.phone ?
                                <div>
                                    {student.phone}
                                </div> : ""
                            }
                            {headerColumns.email ?
                                <div>
                                    {student.email}
                                </div> : ""
                            }
                            {headerColumns.id ?
                                <div>
                                    {student.id}
                                </div> : ""
                            }
                            {headerColumns.date ?
                                <div>
                                    {student.invite_date}
                                </div> : ""
                            }
                            <div>
                                {student.parents.length ? student.parents.map(parent => parent.role).join(',') : ''}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
}


