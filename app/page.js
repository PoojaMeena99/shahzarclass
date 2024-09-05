import React from 'react';
import Principal from './Principal';
import Teacher from './Teacher';
import Student from './Student';

function Page() {
  const principal = {
    name: "Anuj",
    hobbies: "chess",
  };
  const teacher = {
    name: "Shahazar",
    hobbies: "cricket",
  }
  const student = {
    name: "pooja",
    hobbies: "ludo",
  }

  return (
    <div>
      <Principal  Principal {...principal} /> 
      <Teacher name={teacher.name} hobbies={teacher.hobbies} />
      <Student Student={student} />
    </div>
  );
}

export default Page;



