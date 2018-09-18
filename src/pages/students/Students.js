import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StudentList from '../studentList/StudentList';
import { getStudentList } from '../../store/students/actions';
import SettingsIcon from '../../assets/images/settings.png';
import './students.css';

const students = {
    CURRENT: 0,
    GRADUATES: 1,
    DROPPEDOUT: 2,
};

class Students extends React.Component {
    constructor() {
        super();
        this.state = {
            studentType: students.CURRENT,
            showSettings: false,
            limit: 25,
            page: 1,
            settings: {
                headerColumns: {
                    photo: true,
                    phone: true,
                    email: true,
                    id: true,
                    date: true,
                }
            }
        };
    }

    componentDidMount() {
        const { studentType } = this.state;

        this.getStudentsList(studentType);
    }

    handleOnChenge = (e, column) => {
        const isChecked = e.target.checked;
        this.setState((prevState, props) => ({
            settings: {
                ...prevState.settings,
                headerColumns: {
                    ...prevState.settings.headerColumns,
                    [column]: isChecked
                }
            }
        }));
    };

    toggleSettings = () => {
        this.setState(prevState => ({
            showSettings: !prevState.showSettings
        }));
    };

    getStudentsList = (studentType) => {
        const { limit, page } = this.state;

        this.props.getStudentList({
            status: studentType,
            limit,
            offset: page * limit
        });
    }

    handleStudentTypeChange = (studentType) => {
        this.setState({
            studentType
        });
        this.getStudentsList(studentType);
    }

    render() {
        const { studentList } = this.props;
        const { studentType, showSettings, settings: { headerColumns } } = this.state;

        return (
            <div className="students">
                <div className="students_header">
                    <h4>Учащиеся</h4>
                    <div>
                        <img src={SettingsIcon} onClick={this.toggleSettings} width="24" />
                        {showSettings && (
                            <div className="students_setting">
                                <div>
                                    <input id="students_photo" type="checkbox" defaultChecked={headerColumns.photo} onChange={(e) => this.handleOnChenge(e, "photo")} />
                                    <label htmlFor="students_photo">Фото</label>
                                </div>
                                <div>
                                    <input id="students_phone" type="checkbox" defaultChecked={headerColumns.phone} onChange={(e) => this.handleOnChenge(e, "phone")} />
                                    <label htmlFor="students_phone">Телефон</label>
                                </div>
                                <div>
                                    <input id="students_email" type="checkbox" defaultChecked={headerColumns.email} onChange={(e) => this.handleOnChenge(e, "email")} />
                                    <label htmlFor="students_email">Email</label>
                                </div>
                                <div>
                                    <input id="students_id" type="checkbox" defaultChecked={headerColumns.id} onChange={(e) => this.handleOnChenge(e, "id")} />
                                    <label htmlFor="students_id">Id</label>
                                </div>
                                <div>
                                    <input id="students_data" type="checkbox" defaultChecked={headerColumns.date} onChange={(e) => this.handleOnChenge(e, "date")} />
                                    <label htmlFor="students_data">Дата примера</label>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="students_type">
                    <div className={`students_type_item ${studentType === students.CURRENT ? "active" : ""}`} onClick={()=> this.handleStudentTypeChange(students.CURRENT)}>Текущие</div>
                    <div className={`students_type_item ${studentType === students.GRADUATES ? "active" : ""}`} onClick={()=> this.handleStudentTypeChange(students.GRADUATES)}>Выбывшие</div>
                    <div className={`students_type_item ${studentType === students.DROPPEDOUT ? "active" : ""}`} onClick={()=> this.handleStudentTypeChange(students.DROPPEDOUT)}>Выпускники</div>
                </div>
                {Object.keys(studentList).length > 0 && (
                    <StudentList headerColumns={headerColumns} studentList={studentList} />
                )}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    const { studentList } = state.students;

    return {
        studentList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getStudentList: bindActionCreators(getStudentList, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);


